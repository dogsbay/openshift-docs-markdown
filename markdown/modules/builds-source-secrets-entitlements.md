{%- set _mod_docs_content_type = "PROCEDURE" %}
# Adding subscription entitlements as a build secret {id="builds-source-secrets-entitlements_{{ context }}"}

Builds that use Red Hat subscriptions to install content must include the entitlement keys as a build secret.

**Prerequisites**

{% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}
*   You must have access to {{ op_system_base_full }} package repositories through your subscription. The entitlement secret to access these repositories is automatically created by the {{ insights_operator }} when your cluster is subscribed.
{% endif %}
*   You must have access to the cluster as a user with the `cluster-admin` role or you have permission to access secrets in the `openshift-config-managed` project.

**Procedure**

1.  Copy the entitlement secret from the `openshift-config-managed` namespace to the namespace of the build by entering the following commands:
    ```terminal
    $ cat << EOF > secret-template.txt
    kind: Secret
    apiVersion: v1
    metadata:
      name: etc-pki-entitlement
    type: Opaque
    data: {{ range \$key, \$value := .data }}
{{ \$key }}: {{ \$value }} {{ end }}
    EOF
    $ oc get secret etc-pki-entitlement -n openshift-config-managed -o=go-template-file --template=secret-template.txt | oc apply -f -
    ```
1.  Add the etc-pki-entitlement secret as a build volume in the build configuration’s Docker strategy:
    ```yaml
    strategy:
      dockerStrategy:
        from:
          kind: ImageStreamTag
          name: ubi9:latest
        volumes:
        - name: etc-pki-entitlement
          mounts:
          - destinationPath: /etc/pki/entitlement
          source:
            type: Secret
            secret:
              secretName: etc-pki-entitlement
    ```