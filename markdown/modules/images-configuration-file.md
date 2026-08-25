{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring image registry settings {id="images-configuration-file_{{ context }}"}

You can configure image registry settings by editing the `image.config.openshift.io/cluster` custom resource (CR). {._abstract}

**Procedure**

*   Edit the `image.config.openshift.io/cluster` CR by running the following command:
    ```terminal
    $ oc edit image.config.openshift.io/cluster
    ```

    The following is an example `image.config.openshift.io/cluster` CR:
    ```yaml
    apiVersion: config.openshift.io/v1
    kind: Image
    metadata:
      annotations:
        release.openshift.io/create-only: "true"
      creationTimestamp: "2019-05-17T13:44:26Z"
      generation: 1
      name: cluster
      resourceVersion: "8302"
      selfLink: /apis/config.openshift.io/v1/images/cluster
      uid: e34555da-78a9-11e9-b92b-06d6c7da38dc
    spec:
      allowedRegistriesForImport:
        - domainName: quay.io
          insecure: false
      additionalTrustedCA:
        name: myconfigmap
      registrySources:
        allowedRegistries:
        - example.com
        - quay.io
        - registry.redhat.io
        - image-registry.openshift-image-registry.svc:5000
        - reg1.io/myrepo/myapp:latest
        insecureRegistries:
        - insecure.com
    status:
      internalRegistryHostname: image-registry.openshift-image-registry.svc:5000
    ```

    :::note

    When you use the `allowedRegistries`, `blockedRegistries`, or `insecureRegistries` parameter, you can specify an individual repository within a registry. For example: `reg1.io/myrepo/myapp:latest`.

    Avoid insecure external registries to reduce possible security risks.
    
    :::


**Verification**

*   To verify your changes, list your nodes by running the following command:
    ```terminal
    $ oc get nodes
    ```
    ```terminal title="Example output"
    NAME                                         STATUS                     ROLES                  AGE   VERSION
    ip-10-0-137-182.us-east-2.compute.internal   Ready,SchedulingDisabled   worker                 65m   v1.35.4
    ip-10-0-139-120.us-east-2.compute.internal   Ready,SchedulingDisabled   control-plane          74m   v1.35.4
    ip-10-0-176-102.us-east-2.compute.internal   Ready                      control-plane          75m   v1.35.4
    ip-10-0-188-96.us-east-2.compute.internal    Ready                      worker                 65m   v1.35.4
    ip-10-0-200-59.us-east-2.compute.internal    Ready                      worker                 63m   v1.35.4
    ip-10-0-223-123.us-east-2.compute.internal   Ready                      control-plane          73m   v1.35.4
    ```