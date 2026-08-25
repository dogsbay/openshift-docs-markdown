{%- set _mod_docs_content_type = "PROCEDURE" %}
# Enabling label propagation from Ingress to Route resources {id="networking-ingress-label-propagation-enabling_{{ context }}"}

You can enable the Ingress Operator to automatically propagate labels from an `Ingress` resource to the `Route` resource it manages. To enable this, you must add the `reconcile-labels` annotation to an `Ingress` resource. {._abstract}

**Prerequisites**

*   You have access to an {{ product_title }} cluster.
*   You have the `cluster-admin` role or permissions to create and edit `Ingress` resources in a project.

**Procedure**

1.  Create or edit an `Ingress` resource manifest.
1.  In the `metadata.annotations` section, add `route.openshift.io/reconcile-labels: "true"`.
1.  In the `metadata.labels` section, add the labels you want to propagate.

    Example `Ingress` resource with label propagation enabled:
    ```yaml
    apiVersion: networking.k8s.io/v1
    kind: Ingress
    metadata:
      name: example-ingress
      annotations:
        route.openshift.io/reconcile-labels: "true"
      labels:
        app: my-app
        owner: dev-team
    spec:
      ingressClassName: openshift-default
      rules:
      - host: example.com
        http:
          paths:
          - backend:
              service:
                name: example-service
                port:
                  number: 27017
            path: "/"
            pathType: "Prefix"
    ```
1.  Apply the manifest to your cluster:
    ```terminal
    $ oc apply -f <example-ingress-manifest.yaml>
    ```

    Replace `<example-ingress-manifest.yaml>` with the name of your specific manifest file.
1.  Verify that the labels from the `Ingress` resource have propagated to the generated `Route` resource:
    ```terminal
    $ oc get route -l app=my-app --show-labels
    ```

    Example output:
    ```terminal
    NAME          HOST/PORT     PATH   SERVICES          PORT    TERMINATION   WILDCARD   LABELS
    example-rt    example.com   /      example-service   8080                  None       app=my-app,owner=dev-team
    ```