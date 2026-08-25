{%- set _mod_docs_content_type = "PROCEDURE" %}
# Using S2i to deploy OSToy on your cluster {id="cloud-experts-deploying-application-s2i-deployments-deploy-to-cluster_{{ context }}"}

You can use source-to-image (S2i) to deploy your OSToy app onto your cluster. {._abstract}

**Procedure**

1.  Add secret to OpenShift

    The example emulates a `.env` file and shows how easy it is to move these directly into an OpenShift environment. Files can even be renamed in the Secret. In your CLI enter the following command, replacing `<UserName>` with your GitHub username:
    ```terminal
    $ oc create -f https://raw.githubusercontent.com/<UserName>/ostoy/master/deployment/yaml/secret.yaml
    ```
1.  Add ConfigMap to OpenShift

    The example emulates an HAProxy config file, and is typically used for overriding default configurations in an OpenShift application. Files can even be renamed in the ConfigMap.

    In your CLI enter the following command, replacing `<UserName>` with your GitHub username:
    ```terminal
    $ oc create -f https://raw.githubusercontent.com/<UserName>/ostoy/master/deployment/yaml/configmap.yaml
    ```
1.  Deploy the microservice

    You must deploy the microservice first to ensure that the SERVICE environment variables are available from the UI application. `--context-dir` is used here to only build the application defined in the `microservice` directory in the git repository. Using the `app` label allows us to ensure the UI application and microservice are both grouped in the OpenShift UI. Run the following command in the CLI to create the microservice, replacing `<UserName>` with your GitHub username:
    ```terminal
    $ oc new-app https://github.com/<UserName>/ostoy \
        --context-dir=microservice \
        --name=ostoy-microservice \
        --labels=app=ostoy
    ```

    ***Example output***
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
1.  Check the status of the microservice

    Before moving onto the next step we should be sure that the microservice was created and is running correctly by running the following command:
    ```terminal
    $ oc status
    ```

    ***Example output***
    ```terminal
    In project ostoy-s2i on server https://api.myrosacluster.g14t.p1.openshiftapps.com:6443

    svc/ostoy-microservice - 172.30.47.74:8080
      dc/ostoy-microservice deploys istag/ostoy-microservice:latest <-
        bc/ostoy-microservice source builds https://github.com/UserName/ostoy on openshift/nodejs:14-ubi8
        deployment #1 deployed 34 seconds ago - 1 pod
    ```

    Wait until you see that it was successfully deployed. You can also check this through the web UI.
1.  Deploy the front end UI

    The application has been designed to rely on several environment variables to define external settings. Attach the previously created Secret and ConfigMap afterward, along with creating a PersistentVolume. Enter the following into the CLI:
    ```terminal
    $ oc new-app https://github.com/<UserName>/ostoy \
        --env=MICROSERVICE_NAME=OSTOY_MICROSERVICE
    ```

    ***Example output***
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
1.  Update the Deployment

    Update the deployment to use a "Recreate" deployment strategy (as opposed to the default of `RollingUpdate`) for consistent deployments with persistent volumes. Reasoning here is that the PV is backed by EBS and as such only supports the `RWO` method. If the deployment is updated without all existing pods being killed it might not be able to schedule a new pod and create a PVC for the PV as it’s still bound to the existing pod. If you will be using EFS you do not have to change this.
    ```terminal
    $ oc patch deployment ostoy --type=json -p \
        '[{"op": "replace", "path": "/spec/strategy/type", "value": "Recreate"}, {"op": "remove", "path": "/spec/strategy/rollingUpdate"}]'
    ```
1.  Set a Liveness probe

    Create a Liveness Probe on the Deployment to ensure the pod is restarted if something isn’t healthy within the application. Enter the following into the CLI:
    ```terminal
    $ oc set probe deployment ostoy --liveness --get-url=http://:8080/health
    ```
1.  Attach Secret, ConfigMap, and PersistentVolume to Deployment

    Run the following commands attach your secret, ConfigMap, and PersistentVolume:
    1.  Attach Secret
        ```terminal
        $ oc set volume deployment ostoy --add \
            --secret-name=ostoy-secret \
            --mount-path=/var/secret
        ```
    1.  Attach ConfigMap
        ```terminal
        $ oc set volume deployment ostoy --add \
            --configmap-name=ostoy-config \
            -m /var/config
        ```
    1.  Create and attach PersistentVolume
        ```terminal
        $ oc set volume deployment ostoy --add \
            --type=pvc \
            --claim-size=1G \
            -m /var/demo_files
        ```
1.  Expose the UI application as an OpenShift Route

    Run the following command to deploy this as an HTTPS application that uses the included TLS wildcard certificates:
    ```terminal
    $ oc create route edge --service=ostoy --insecure-policy=Redirect
    ```
1.  Browse to your application with the following methods:
    *   Running the following command opens a web browser with your OSToy application:
        ```terminal
        $ python -m webbrowser "$(oc get route ostoy -o template --template='https://{{.spec.host}}')"
        ```
    *   You can get the route for the application and copy and paste the route into your browser by running the following command:
        ```terminal
        $ oc get route
        ```