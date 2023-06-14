import { useTextOptionStore } from '@/data/TextOptionStore'

const { setBucket, setMessage } = useTextOptionStore.getState()

export const presets = {
    rfc: () => {
        setBucket('COLLECTIONS')
        setMessage('Want to pull your membership out of collections for a fraction of the cost? Sounds crazy, I know. However, you can save your credit score and cut your balance! Re-Sign with our forgiveness program and start a new membership. Reply or call 302-613-0721 to get started.')
    },
    missedGuest: () => {
        setBucket('MISSED_GUEST')
        setMessage('Thank you for visiting our club! We hope you enjoyed your visit. I know wer spent some time getting to know you and your needs. Are you ready to get started? We can help you get started today for as low as $1 and the processing. Reply or call 302-613-0721 to get started.')
    },
    webLead: () => {
        setBucket('WEB_LEAD')
        setMessage('I wanted to reach out and see if you needed any more information that you weren\'t able to get online? I\'m interested to learn more about your goals and help you find a membership that fits. Does text or call work best for you? If you are ready you can also get started here.')
    },
    apptNoShow: () => {
        setBucket('APPT_NO_SHOW')
        setMessage('I see you missed your appointment with us. I want to make sure you don\'t miss oout on being able to use your pass. When is the best time for you to come by and visit us? If you are ready, you can also get started today here.')
    },
    paidPass: () => {
        setBucket('PAID_PASS')
        setMessage('Thanks for visiting our Club. We\'re running a deal today only! We\'ll apply the money you paid on your most revent visit towards getting started today! Is this something you would be interested in?')
    }
}