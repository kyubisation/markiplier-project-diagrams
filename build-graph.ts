import { youtube, youtube_v3 } from "@googleapis/youtube";
import { readFileSync, writeFileSync } from "fs";

if (module === require.main) {
  // buildGraph("xAOv_zvXBQk");
  buildGraph("j64oZLF443g");
}

interface VideoNode {
  id: string;
  depth: number;
  stateId: string;
  title: string;
  description: string;
  links: VideoNode[];
  video: youtube_v3.Schema$Video;
}

async function buildGraph(id: string) {
  const index = new Map<string, VideoNode>();
  let stateId = 0;
  const client = youtube({
    version: "v3",
    auth: readFileSync("./api_key", "utf8"),
  });
  const root = await createNodeFromId(id);
  updateMermaidDiagram(root!);

  async function createNodeFromId(id: string, depth = 0) {
    try {
      const videoNode: VideoNode = {
        id,
        depth,
        stateId: "",
        title: "",
        description: "",
        links: [],
        video: {} as any,
      };
      index.set(id, videoNode);
      const result = await client.videos.list({
        id: [id],
        part: ["snippet"],
      });
      const video = result.data.items?.[0]!;
      videoNode.title = video.snippet!.title!.replace(/"/g, `'`);
      videoNode.description = video.snippet?.description ?? "";
      videoNode.video = video;
      videoNode.stateId = createStateId(videoNode);
      const youtubeIds = extractYoutubeIds(videoNode.description);
      const newDepth = depth + 1;
      const linkVideoNodes = await Promise.all(
        youtubeIds.map((linkId) => {
          if (index.has(linkId)) {
            const node = index.get(linkId)!;
            if (node.depth > newDepth) {
              node.depth = newDepth;
            }
            return Promise.resolve(node);
          } else {
            return createNodeFromId(linkId, newDepth);
          }
        })
      );
      videoNode.links.push(
        ...linkVideoNodes.filter((n): n is VideoNode => !!n)
      );
      return videoNode;
    } catch (e) {
      console.error(`Failed to create video node for ${id}`);
      console.error(e);
    }
  }

  function createStateId(node: VideoNode) {
    return (
      (" " + node.title)
        .toLowerCase()
        .replace(/[^a-zA-Z0-9]+(.)/g, (_m, chr) => chr.toUpperCase())
        .replace(/[^a-zA-Z0-9]/g, "") + `_${stateId++}`
    );
  }

  function extractYoutubeIds(text: string) {
    const urls = text.match(/(((https?:\/\/)|(www\.))[^\s]+)/g) ?? [];
    return urls
      .map((url) => {
        try {
          const parsedUrl = new URL(url);
          if (parsedUrl.host.includes("youtube.com")) {
            return parsedUrl.searchParams.get("v")!;
          } else if (parsedUrl.host.includes("youtu.be")) {
            return parsedUrl.pathname.substring(1);
          } else {
            return null;
          }
        } catch (e) {
          console.error(`Failed to parse url ${url}`);
          console.error(e);
          return null;
        }
      })
      .filter((u): u is string => !!u);
  }

  function updateMermaidDiagram(root: VideoNode) {
    const videos = Array.from(index.values()).sort((a, b) => a.depth - b.depth);
    // const videos = videosAsArray(root);
    let output = "```mermaid\n    stateDiagram-v2\n";
    for (const video of videos) {
      output += `        state "<a href='https://www.youtube.com/watch?v=${video.id}'>${video.title}</a>" as ${video.stateId}\n`;
    }

    output += "\n";
    output += `        [*] --> ${root.stateId}\n`;
    for (const video of videos) {
      if (video.links.length) {
        for (const link of video.links) {
          output += `        ${video.stateId} --> ${link.stateId}\n`;
        }
      } else {
        output += `        ${video.stateId} --> [*]\n`;
      }
    }

    output += "```\n";

    writeFileSync("./README.md", output, "utf8");
  }

  function videosAsArray(root: VideoNode, result = [root]) {
    const links = root.links.filter((l) => !result.includes(l));
    result.push(...links);
    for (const node of links) {
      videosAsArray(node, result);
    }
    return result;
  }
}
