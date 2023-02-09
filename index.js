const core = require('@actions/core');
const request = require('request');

try{

  const webhook = core.getInput('SLACK_WEBHOOK_URL');
  const color = core.getInput('color');
  const message = core.getInput('message');

  core.debug(`webhook url supplied ${webhook}`);

  const payload = JSON.stringify({
    attachments: [
      {
        fallback: 'Github Actions Run Information',
        color: `${color}`,
        pretext: `${message}`,
        fields: [
          {
            title: 'Repository',
            value: process.env.GITHUB_REPOSITORY,
            short: true,
          },
          {
            title: 'Workflow',
            value: `${process.env.GITHUB_SERVER_URL}/${process.env.GITHUB_REPOSITORY}/actions/runs/${process.env.GITHUB_RUN_ID}`,
            short: true,
          },
          {
            title: 'Run ID',
            value: process.env.GITHUB_RUN_ID,
            short: true,
          },
          {
            title: 'Actor',
            value: process.env.GITHUB_ACTOR,
            short: true,
          },
        ],
      },
    ],
  });

  const options = {
    url: `${webhook}`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: payload,
  };

  request(options, (error, response, body) => {
    if (error) {
      console.error(`Error: ${error}`);
      return;
    }

    console.log(`Status code: ${response.statusCode}`);
    console.log(`Response body: ${body}`);
  });

}catch (error){
  core.error(error.message)
  core.setFailed(error.message)
}