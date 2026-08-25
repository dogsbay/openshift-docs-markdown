{%- set _mod_docs_content_type = "PROCEDURE" %}
# Customizing a perspective using YAML view {id="odc-customizing-a-perspective-using-YAML-view_{{ context }}"}

You can customize the visibility of a perspective in the web console by using the YAML view. {._abstract}

**Prerequisites**

*   You must have administrator privileges.

**Procedure**

1.  In the **Administrator** perspective, navigate to **Administration** → **Cluster Settings**.
1.  Select the **Configuration** tab and click the **Console (operator.openshift.io)** resource.
1.  Click the **YAML** tab and make your customization:
    1.  To enable or disable a perspective, insert the snippet for **Add user perspectives** and edit the YAML code as needed:
        ```yaml
        apiVersion: operator.openshift.io/v1
        kind: Console
        metadata:
          name: cluster
        spec:
          customization:
            perspectives:
              - id: admin
                visibility:
                  state: Enabled
              - id: dev
                visibility:
                  state: Enabled
        ```
    1.  To hide a perspective based on RBAC permissions, insert the snippet for **Hide user perspectives** and edit the YAML code as needed:
        ```yaml
        apiVersion: operator.openshift.io/v1
        kind: Console
        metadata:
          name: cluster
        spec:
          customization:
            perspectives:
              - id: admin
                requiresAccessReview:
                  - group: rbac.authorization.k8s.io
                    resource: clusterroles
                    verb: list
              - id: dev
                state: Enabled
        ```
    1.  To customize a perspective based on your needs, create your own YAML snippet:
        ```yaml
        apiVersion: operator.openshift.io/v1
        kind: Console
        metadata:
          name: cluster
        spec:
          customization:
            perspectives:
              - id: admin
                visibility:
                  state: AccessReview
                  accessReview:
                    missing:
                      - resource: deployment
                        verb: list
                    required:
                      - resource: namespaces
                        verb: list
              - id: dev
                visibility:
                  state: Enabled
        ```
1.  Click **Save**.