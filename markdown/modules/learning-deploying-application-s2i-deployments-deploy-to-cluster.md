{%- set _mod_docs_content_type = "PROCEDURE" %}
# Using S2i to deploy OSToy on your cluster {id="learning-deploying-application-s2i-deployments-deploy-to-cluster_{{ context }}"}

To simplify your deployment process, you can deploy OSToy on your cluster by using the Source-to-Image (S2I) builder. This tool saves you time by automatically building a reproducible container image directly from the source binaries. {._abstract}

**Procedure**

1.  Add a secret to {{ ocp_short }}.

    This example emulates a `.env` file. Files are easily moved directly into an {{ ocp_short }} environment and can even be renamed in the secret.
    *   Run the following command, replacing `<UserName>` with your GitHub username:
        ```terminal
        $ oc create -f https://raw.githubusercontent.com/<UserName>/ostoy/master/deployment/yaml/secret.yaml
        ```
1.  Add a ConfigMap to {{ ocp_short }}.

    This example emulates an HAProxy config file, which is typically used for overriding default configurations in an {{ ocp_short }} application. Files can be renamed in the ConfigMap.
    *   Run the following command, replacing `<UserName>` with your GitHub username:
        ```terminal
        $ oc create -f https://raw.githubusercontent.com/<UserName>/ostoy/master/deployment/yaml/configmap.yaml
        ```
1.  Deploy the microservice.

    You must deploy the microservice to ensure that the service environment variables are available from the UI application.

    `--context-dir` builds the application defined in the `microservice` directory in the Git repository. The `app` label ensures the user interface (UI) application and microservice are both grouped in the {{ ocp_short }} UI.
    *   Run the following command to create the microservice, replacing `<UserName>` with your GitHub username:
        ```terminal
        $ oc new-app https://github.com/<UserName>/ostoy \
            --context-dir=microservice \
            --name=ostoy-microservice \
            --labels=app=ostoy
        ```

        **Example output**:
        ```terminal
        --> Creating resources with label app=ostoy ...
            imagestream.image.openshift.io "ostoy-microservice" created
            buildconfig.build.openshift.io "ostoy-microservice" created
            deployment.apps "ostoy-microservice" created
            service "ostoy-microservice" created
        --> Success
            Build scheduled, use 'oc logs -f buildconfig/ostoy-microservice' to track its progress.
            Application is not exposed. You can expose services to the outside world by executing one or more of the commands below:
             'oc expose service/ostoy-microservice'
            Run 'oc status' to view your app.
        ```
1.  Check the status of the microservice.
    *   Check that the microservice was created and is running correctly by running the following command:
        ```terminal
        $ oc status
        ```

        **For example**:
        ```terminal
        In project ostoy-s2i on server https://api.myrosacluster.g14t.p1.openshiftapps.com:6443

        svc/ostoy-microservice - 172.30.47.74:8080
          dc/ostoy-microservice deploys istag/ostoy-microservice:latest <-
            bc/ostoy-microservice source builds https://github.com/UserName/ostoy on openshift/nodejs:14-ubi8
            deployment #1 deployed 34 seconds ago - 1 pod
        ```

        Wait until you see that the microservice was successfully deployed. You can also check this through the web UI.
1.  Deploy the front end UI.

    The application relies on several environment variables to define external settings.
    *   Attach the secret and ConfigMap and create a PersistentVolume by running the following command:
        ```terminal
        $ oc new-app https://github.com/<UserName>/ostoy \
            --env=MICROSERVICE_NAME=OSTOY_MICROSERVICE
        ```

        **For example**:
        ```terminal
        --> Creating resources ...
            imagestream.image.openshift.io "ostoy" created
            buildconfig.build.openshift.io "ostoy" created
            deployment.apps "ostoy" created
            service "ostoy" created
        --> Success
            Build scheduled, use 'oc logs -f buildconfig/ostoy' to track its progress.
            Application is not exposed. You can expose services to the outside world by executing one or more of the commands below:
             'oc expose service/ostoy'
            Run 'oc status' to view your app.
        ```
1.  Update the deployment by running the following command:
    ```terminal
    $ oc patch deployment ostoy --type=json -p \
        '[{"op": "replace", "path": "/spec/strategy/type", "value": "Recreate"}, {"op": "remove", "path": "/spec/strategy/rollingUpdate"}]'
    ```
1.  Set a liveness probe.

    Create a liveness probe to ensure the pod restarts if something is wrong in the application.
    *   Run the following command:
        ```terminal
        $ oc set probe deployment ostoy --liveness --get-url=http://:8080/health
        ```
1.  Attach the secret, ConfigMap, and persistent volume to the deployment.
    1.  Run the following command to attach your secret:
        ```terminal
        $ oc set volume deployment ostoy --add \
            --secret-name=ostoy-secret \
            --mount-path=/var/secret
        ```
    1.  Run the following command to attach your ConfigMap:
        ```terminal
        $ oc set volume deployment ostoy --add \
            --configmap-name=ostoy-config \
            -m /var/config
        ```
    1.  Run the following command to create and attach your persistent volume:
        ```terminal
        $ oc set volume deployment ostoy --add \
            --type=pvc \
            --claim-size=1G \
            -m /var/demo_files
        ```
1.  Expose the UI application as an {{ ocp_short }} Route.
    *   Run the following command to deploy the application as an HTTPS application that uses the included TLS wildcard certificates:
        ```terminal
        $ oc create route edge --service=ostoy --insecure-policy=Redirect
        ```
1.  Browse to your application with the following methods:
    *   Run the following command to open a web browser with your OSToy application:
        ```terminal
        $ python -m webbrowser "$(oc get route ostoy -o template --template='https://{{.spec.host}}')"
        ```
    *   Run the following command to get the route for the application and copy and paste the route into your browser:
        ```terminal
        $ oc get route
        ```