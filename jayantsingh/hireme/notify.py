from slackclient import SlackClient

try:
    from secrets import BOT_TOKEN
except ImportError:
    raise ImportError('Please add the secrets file in the project directory (jayantsingh) and add BOT_TOKEN to it')

slack_client = SlackClient(BOT_TOKEN)

def notify(data):
    message = 'Name: {}, Email: {}, Description: {}'.format(data['name'], data['email'], data['description'])
    slack_client.rtm_connect(with_team_state=False)
    slack_client.api_call('chat.postMessage',channel='general',text=message)