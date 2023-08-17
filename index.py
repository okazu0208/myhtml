import pusher
import cgi

form = cgi.FieldStorage()
value = form.getvalue("value")

pusher_client = pusher.Pusher(
    app_id='1651847',
    key='5c79a538be329c027f05',
    secret='0936b6ce791c9beb060f',
    cluster='ap3',
    ssl=True
)

pusher_client.trigger('my-channel', 'my-event', {'message': value})

print("Content-Type: text/html\n\n")
print("Value sent to Pusher.")
