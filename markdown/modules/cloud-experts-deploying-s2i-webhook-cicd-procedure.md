{%- set _mod_docs_content_type = "PROCEDURE" %}
# Setting up S2I webhooks for automated deployment {id="cloud-experts-deploying-s2i-webhook-cicd-procedure_{{ context }}"}

This procedure guides you through setting up a GitHub webhook to automatically trigger builds and deployments when you push changes to your source code repository. {._abstract}

**Procedure**

1.  To get the GitHub webhook trigger secret, in your terminal, run the following command:
    ```terminal
    $ oc get bc/ostoy-microservice -o=jsonpath='{.spec.triggers..github.secret}'
    ```

    ***Example output:***
    ```terminal
    `o_3x9M1qoI2Wj_cz1WiK`
    ```

    :::important

    You need to use this secret in a later step in this process.
    
    :::

1.  To get the GitHub webhook trigger URL from the OSToy’s buildconfig, run the following command:
    ```terminal
    $ oc describe bc/ostoy-microservice
    ```

    ***Example output:***
    ```terminal
    [...]
    Webhook GitHub:
    	URL:	https://api.demo1234.openshift.com:443/apis/build.openshift.io/v1/namespaces/ostoy-s2i/buildconfigs/ostoy/webhooks/<secret>/github
    [...]
    ```
1.  In the GitHub webhook URL, replace the `<secret>` text with the secret you retrieved. Your URL will resemble the following example output:

    ***Example output:***
    ```text
    https://api.demo1234.openshift.com:443/apis/build.openshift.io/v1/namespaces/ostoy-s2i/buildconfigs/ostoy-microservice/webhooks/o_3x9M1qoI2Wj_czR1WiK/github
    ```
1.  Setup the webhook URL in GitHub repository.
    1.  In your repository, click **Settings > Webhooks > Add webhook**.
        ![Add Webhook](/_assets/images/ostoy-webhook.png)
    1.  Paste the GitHub webhook URL with the `Secret` included into the "Payload URL" field.
    1.  Change the "Content type" to `application/json`.
    1.  Click the **Add webhook** button.
        ![Finish Add Webhook](/_assets/images/ostoy-webhookfinish.png)

        You should see a message from GitHub stating that your webhook was successfully configured. Now, whenever you push a change to your GitHub repository, a new build automatically starts, and upon a successful build, a new deployment starts.
1.  Now, make a change in the source code. Any changes automatically trigger a build and deployment. In this example, the colors that denote the status of your OSToy app are selected randomly. To test the configuration, change the box to only display grayscale.
    1.  Go to the source code in your repository link:[https://github.com/&lt;username>/ostoy/blob/master/microservice/app.js].
    1.  Edit the file.
    1.  Comment out line 8 (containing `let randomColor = getRandomColor();`).
    1.  Uncomment line 9 (containing `let randomColor = getRandomGrayScaleColor();`).

```javascript
7   app.get('/', function(request, response) {
8   //let randomColor = getRandomColor(); // <-- comment this
9   let randomColor = getRandomGrayScaleColor(); // <-- uncomment this
10   
11  response.writeHead(200, {'Content-Type': 'application/json'});
```

.. Enter a message for the update, such as "changed box to grayscale colors".
.. Click **Commit** at the bottom to commit the changes to the main branch.

1.  In your cluster’s web UI, click **Builds > Builds** to determine the status of the build. After this build is completed, the deployment begins. You can also check the status by running `oc status` in your terminal. 
    ![Build Run](/_assets/images/ostoy-builddone.png)
1.  After the deployment has finished, return to the OSToy application in your browser. Access the **Networking** menu item on the left. The box color is now limited to grayscale colors only.
    ![Gray](/_assets/images/ostoy-gray.png)