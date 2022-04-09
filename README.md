# markiplier-project-diagrams

```mermaid
    stateDiagram-v2
        state "<a href='https://www.youtube.com/watch?v=j64oZLF443g'>In Space with Markiplier: Part 1</a>" as in-space-with-markiplier
        state "<a href='https://www.youtube.com/watch?v=raIqPgW-quI'>Put Out the Fire</a>" as put-out-the-fire
        state "<a href='https://www.youtube.com/watch?v=NK-u4ukbOFw'>Send Mark In</a>" as send-mark-in
        state "<a href='https://www.youtube.com/watch?v=bYy_aAiTfYA'>Send Mark in Again</a>" as send-mark-in-again
        state "<a href='https://www.youtube.com/watch?v=7P9mpmsLSno'>Send Mark in... Again</a>" as send-mark-in-again-2
        state "<a href='https://www.youtube.com/watch?v=Rm7nK2x_FWQ'>Fix it from the Outside!</a>" as fix-it-from-the-outside
        state "<a href='https://www.youtube.com/watch?v=uIMvjur42Vw'>Fix it from the Outside!</a>" as fix-it-from-the-outside-2
        state "<a href='https://www.youtube.com/watch?v=Y0Ja_BrgGhA'>Fix it from the Outside!</a>" as fix-it-from-the-outside-3
        state "<a href='https://www.youtube.com/watch?v=Dq1BrxAXQLg'>Wake the Crew</a>" as wake-the-crew-mark
        state "<a href='https://www.youtube.com/watch?v=Tn1MkhNUaA4'>Wake the Crew</a>" as wake-the-crew-mark-2
        state "<a href='https://www.youtube.com/watch?v=ch07UcMzWkQ'>Wake the Crew</a>" as wake-the-crew-mark-3
        state "<a href='https://www.youtube.com/watch?v=mGtFUm-sgh4'>Fix Life Support</a>" as fix-life-support
        state "<a href='https://www.youtube.com/watch?v=HHlphhgN1kU'>Wake the Crew</a>" as wake-the-crew
        state "<a href='https://www.youtube.com/watch?v=ogrmyhb5gNI'>Wake the Crew</a>" as wake-the-crew-2
        state "<a href='https://www.youtube.com/watch?v=SKODGzV20LU'>Wake the Crew</a>" as wake-the-crew-3
        state "<a href='https://www.youtube.com/watch?v=5eG8rFt_JuY'>Wear a Disguise</a>" as wear-a-disguise
        state "<a href='https://www.youtube.com/watch?v=8Figj37SoPg'>Call for Backup</a>" as call-for-backup
        state "<a href='https://www.youtube.com/watch?v=98bVPHiSY_k'>Blow IT up before IT blows YOU up!</a>" as blow-it-up
        state "<a href='https://www.youtube.com/watch?v=98bVPHiSY_k'>I Believe You</a>" as i-believe-you
        state "<a href='https://www.youtube.com/watch?v=5nZZAmvRIuU'>This Must be a Dream!</a>" as this-must-be-a-dream
        state "<a href='https://www.youtube.com/watch?v=HcfjRwNr89Q'>Go Towards the Light...</a>" as go-towards-the-light

        [*] --> in-space-with-markiplier
        in-space-with-markiplier --> put-out-the-fire
        in-space-with-markiplier --> fix-life-support

        put-out-the-fire --> fix-it-from-the-outside
        put-out-the-fire --> send-mark-in
        put-out-the-fire --> wake-the-crew-mark
        fix-it-from-the-outside --> fix-it-from-the-outside-2
        fix-it-from-the-outside --> send-mark-in-again
        send-mark-in --> fix-it-from-the-outside-2
        send-mark-in --> send-mark-in-again
        wake-the-crew-mark --> fix-it-from-the-outside-2
        wake-the-crew-mark --> wake-the-crew-mark-2
        fix-it-from-the-outside-2 --> fix-it-from-the-outside-3
        fix-it-from-the-outside-2 --> send-mark-in-again-2
        send-mark-in-again --> fix-it-from-the-outside-3
        send-mark-in-again --> send-mark-in-again-2
        fix-it-from-the-outside-3 --> go-towards-the-light
        send-mark-in-again-2 --> go-towards-the-light

        fix-life-support --> wake-the-crew
        fix-life-support --> wear-a-disguise
        wake-the-crew --> call-for-backup
        wake-the-crew --> wake-the-crew-2
        wear-a-disguise --> fix-it-from-the-outside
        wear-a-disguise --> send-mark-in
        wear-a-disguise --> wake-the-crew-mark
        call-for-backup --> fix-it-from-the-outside
        call-for-backup --> send-mark-in
        call-for-backup --> wake-the-crew-mark
        wake-the-crew-2 --> blow-it-up
        wake-the-crew-2 --> wake-the-crew-3
        blow-it-up --> i-believe-you
        blow-it-up --> this-must-be-a-dream
        wake-the-crew-3 --> go-towards-the-light
        i-believe-you --> go-towards-the-light
        this-must-be-a-dream --> go-towards-the-light
```