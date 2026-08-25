{%- set _mod_docs_content_type = "PROCEDURE" %}
# Enabling automatic sidecar injection {id="ossm-automatic-sidecar-injection_{{ context }}"}

When deploying an application, you must opt-in to injection by configuring the label `sidecar.istio.io/inject` in `spec.template.metadata.labels` to `true` in the `deployment` object. Opting in ensures that the sidecar injection does not interfere with other {{ product_title }} features such as builder pods used by numerous frameworks within the {{ product_title }} ecosystem.

**Prerequisites**

*   Identify the namespaces that are part of your service mesh and the deployments that need automatic sidecar injection.

**Procedure**

1.  To find your deployments use the `oc get` command.
    ```terminal
    $ oc get deployment -n <namespace>
    ```

    For example, to view the `Deployment` YAML file for the 'ratings-v1' microservice in the `bookinfo` namespace, use the following command to see the resource in YAML format.
    ```terminal
    oc get deployment -n bookinfo ratings-v1 -o yaml
    ```
1.  Open the application’s `Deployment` YAML file in an editor.
1.  Add `spec.template.metadata.labels.sidecar.istio/inject` to your Deployment YAML file and set `sidecar.istio.io/inject` to `true` as shown in the following example.
    ```yaml title="Example snippet from bookinfo deployment-ratings-v1.yaml"
    apiVersion: apps/v1
    kind: Deployment
    metadata:
      name: ratings-v1
      namespace: bookinfo
      labels:
        app: ratings
        version: v1
    spec:
      template:
        metadata:
          labels:
            sidecar.istio.io/inject: 'true'
    ```

    :::note

    Using the `annotations` parameter when enabling automatic sidecar injection is deprecated and is replaced by using the `labels` parameter.
    
    :::

1.  Save the `Deployment` YAML file.
1.  Add the file back to the project that contains your app.
    ```terminal
    $ oc apply -n <namespace> -f deployment.yaml
    ```

    In this example, `bookinfo` is the name of the project that contains the `ratings-v1` app and `deployment-ratings-v1.yaml` is the file you edited.
    ```terminal
    $ oc apply -n bookinfo -f deployment-ratings-v1.yaml
    ```
1.  To verify that the resource uploaded successfully, run the following command.
    ```terminal
    $ oc get deployment -n <namespace> <deploymentName> -o yaml
    ```

    For example,
    ```terminal
    $ oc get deployment -n bookinfo ratings-v1 -o yaml
    ```