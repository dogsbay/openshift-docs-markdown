{%- set _mod_docs_content_type = "PROCEDURE" %}
# Deploying the front-end microservice {id="learning-deploying-application-deployment-frontend-microservice_{{ context }}"}

The front-end deployment uses the Node.js front-end for the application and additional Kubernetes objects. Front-end deployment defines the following features: {._abstract}

*   Persistent volume claim
*   Deployment object
*   Service
*   Route
*   ConfigMaps
*   Secrets

**Procedure**

*   Deploy the application front-end and create the objects by running the following command:
    ```terminal
    $ oc apply -f https://raw.githubusercontent.com/openshift-cs/rosaworkshop/master/rosa-workshop/ostoy/yaml/ostoy-frontend-deployment.yaml
    ```

    **For example**:
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

    All objects should create successfully.