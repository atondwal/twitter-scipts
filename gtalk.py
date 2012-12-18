#!/usr/bin/env python2

import sys
import tweepy
from secret import *
# secret has the:
#   CONSUMER_KEY
#   CONSUMER_SECRET
#   ACCESS_KEY
#   ACCESS_SECRET

if sys.argv[1] in ["\nOffline", "\nAvailable", "\nAway"]:
	exit()

auth = tweepy.OAuthHandler(CONSUMER_KEY, CONSUMER_SECRET)
auth.set_access_token(ACCESS_KEY, ACCESS_SECRET)
api = tweepy.API(auth)
if len(sys.argv[1])>140:
	sys.argv[1]=sys.argv[1][:136]+'...'
api.update_status(sys.argv[1])
