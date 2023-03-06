import Imap from 'imap'
import { inspect } from 'util'

const imap = new Imap({
  user: 'VinewAlves@hotmail.com',
  password: 'AbacaxiTriangular@0917',
  host: 'outlook.office365.com',
  port: 993,
  tls: true
})

imap.connect()

function openInbox(){
  imap.openBox('inbox', true, (err, box) => {
    err
    ? console.log(err)
    : (
      console.log(imap.seq.fetch(box.messages.total + ':*', {bodies: ['HEADER.FIELDS (FROM)', 'TEXT']}))
    )
  })
}

imap.once('ready', () => {
  openInbox()
})