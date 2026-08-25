{%- set _mod_docs_content_type = "PROCEDURE" %}
# Deploying the front-end service {id="cloud-experts-deploying-application-deployment-frontend-microservice_{{ context }}"}

The front-end deployment uses the Node.js front-end for the application and additional Kubernetes objects. {._abstract}

The `ostoy-frontend-deployment.yaml` file shows that front-end deployment defines the following features:

*   Persistent volume claim
*   Deployment object
*   Service
*   Route
*   Configmaps
*   Secrets

**Procedure**

*   Deploy the application front-end and create all of the objects by entering the following command:
    ```terminal
    $ oc apply -f https://raw.githubusercontent.com/openshift-cs/rosaworkshop/master/rosa-workshop/ostoy/yaml/ostoy-frontend-deployment.yaml
    ```

    ***Example output***
    ```terminal
    persistentvolumeclaim/ostoy-pvc created
    deployment.apps/ostoy-frontend created
    service/ostoy-frontend-svc created
    route.route.openshift.io/ostoy-route created
    configmap/ostoy-configmap-env created
    secret/ostoy-secret-env created
    configmap/ostoy-configmap-files created
    secret/ostoy-secret created
    ```

    You should see all objects created successfully.