# markiplier-project-diagrams

```mermaid
    stateDiagram-v2
        state "<a href='https://www.youtube.com/watch?v=j64oZLF443g'>In Space with Markiplier: Part 1</a>" as iswmp1

        [*] --> iswmp1
        iswmp1 --> [*]

        iswmp1 --> Moving
        Moving --> iswmp1
        Moving --> Crash
        Crash --> [*]
```