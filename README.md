# Simple Slack notification action

[![units-test](https://github.com/vishal-kapse/slack-notify-action/actions/workflows/test.yml/badge.svg)](https://github.com/vishal-kapse/slack-notify-action/actions/workflows/test.yml)

##

Send GitHub Actions workflow status notifications to Slack.
A very simple and light javascript action uses POST request to slack webhook.

## Features

- Simple, light and easy to use
- Customize the Slack notification message
- Customize the color


## Example workflows

Minimal workflow

```bash
  - uses: vishal-kapse/slack-notify-action@v1
    if: failure()
    with:
      SLACK_WEBHOOK_URL: ${{ secrets.SLACK_WEBHOOK_URL }} # required
```

Custom message and color

```bash
  - uses: vishal-kapse/slack-notify-action@v1
    if: failure()
    with:
      SLACK_WEBHOOK_URL: ${{ secrets.SLACK_WEBHOOK_URL }} # required
      color: "#ff0000"
      message: "Github workflow run failed"
```


