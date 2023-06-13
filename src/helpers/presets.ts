import { useTextOptionStore } from '@/data/TextOptionStore'

const { setBucket } = useTextOptionStore.getState()

export const presets = {
    rfc: () => {
        setBucket('COLLECTIONS')
    },
    missedGuest: () => {
        setBucket('MISSED_GUEST')
    },
    guestOfTotal: () => {
        setBucket('GUEST_OF_TOTAL')
    },
    webLead: () => {
        setBucket('WEB_LEAD')
    },
    apptNoShow: () => {
        setBucket('APPT_NO_SHOW')
    },
    paidPass: () => {
        setBucket('PAID_PASS')
    }
}