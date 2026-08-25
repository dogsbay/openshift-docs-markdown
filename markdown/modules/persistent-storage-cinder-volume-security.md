{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring Cinder volume security {id="persistent-storage-cinder-volume-security_{{ context }}"}

If you use Cinder PVs in your application, configure security for their deployment resources. {._abstract}

**Prerequisites**

*   An SCC must be created that uses the appropriate `fsGroup` strategy.

**Procedure**

1.  Create a service account and add it to the SCC:
    ```terminal
    $ oc create serviceaccount <service_account>
    ```
    ```terminal
    $ oc adm policy add-scc-to-user <new_scc> -z <service_account> -n <project>
    ```
1.  In your application’s deployment resource, provide the service account name and `securityContext`:
    ```yaml
    apiVersion: v1
    kind: ReplicationController
    metadata:
      name: frontend-1
    spec:
      replicas: 1
      selector:
        name: frontend
      template:
        metadata:
          labels:
            name: frontend
        spec:
          containers:
          - image: openshift/hello-openshift
            name: helloworld
            ports:
            - containerPort: 8080
              protocol: TCP
          restartPolicy: Always
          serviceAccountName: <service_account>
          securityContext:
            fsGroup: 7777
    ```

    where:

    `spec.replicas`
    :   Specifies the number of copies of the pod to run.

    `spec.selector`
    :   Specifies the label selector of the pod to run.

    `spec.template`
    :   Specifies a template for the pod that the controller creates.

    `spec.template.metadata.labels`
    :   Specifies the labels on the pod. They must include labels from the label selector.

    `spec.template.metadata.labels.name`
    :   Specifies the maximum name length after expanding any parameters is 63 characters.

    `spec.template.spec.serviceAccountName`
    :   Specifies the service account you created.

    `spec.template.spec.securityContext.fsGroup`
    :   Specifies an `fsGroup` for the pods.