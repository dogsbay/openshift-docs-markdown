{%- set _mod_docs_content_type = "PROCEDURE" %}
# Injecting a custom CA certificate for the {{ cert_manager_operator }} {id="cert-manager-proxy-support_{{ context }}"}

If your {{ product_title }} cluster has the cluster-wide proxy enabled, you can inject any CA certificates that are required for proxying HTTPS connections into the {{ cert_manager_operator }}. {._abstract}

**Prerequisites**

*   You have access to the cluster as a user with the `cluster-admin` role.
*   You have enabled the cluster-wide proxy for {{ product_title }}.

**Procedure**

1.  Create a config map in the `cert-manager` namespace by running the following command:
    ```terminal
    $ oc create configmap trusted-ca -n cert-manager
    ```
1.  Inject the CA bundle that is trusted by {{ product_title }} into the config map by running the following command:
    ```terminal
    $ oc label cm trusted-ca config.openshift.io/inject-trusted-cabundle=true -n cert-manager
    ```
1.  Update the deployment for the {{ cert_manager_operator }} to use the config map by running the following command:
    ```terminal
    $ oc -n cert-manager-operator patch subscription openshift-cert-manager-operator --type='merge' -p '{"spec":{"config":{"env":[{"name":"TRUSTED_CA_CONFIGMAP_NAME","value":"trusted-ca"}]}}}'
    ```

**Verification**

1.  Verify that the deployments have finished rolling out by running the following command:
    ```terminal
    $ oc rollout status deployment/cert-manager-operator-controller-manager -n cert-manager-operator && \
    oc rollout status deployment/cert-manager -n cert-manager && \
    oc rollout status deployment/cert-manager-webhook -n cert-manager && \
    oc rollout status deployment/cert-manager-cainjector -n cert-manager
    ```
    ```terminal title="Example output"
    deployment "cert-manager-operator-controller-manager" successfully rolled out
    deployment "cert-manager" successfully rolled out
    deployment "cert-manager-webhook" successfully rolled out
    deployment "cert-manager-cainjector" successfully rolled out
    ```
1.  Verify that the CA bundle was mounted as a volume by running the following command:
    ```terminal
    $ oc get deployment cert-manager -n cert-manager -o=jsonpath={.spec.template.spec.'containers[0].volumeMounts'}
    ```
    ```terminal title="Example output"
    [{"mountPath":"/etc/pki/tls/certs/cert-manager-tls-ca-bundle.crt","name":"trusted-ca","subPath":"ca-bundle.crt"}]
    ```
1.  Verify that the source of the CA bundle is the `trusted-ca` config map by running the following command:
    ```terminal
    $ oc get deployment cert-manager -n cert-manager -o=jsonpath={.spec.template.spec.volumes}
    ```
    ```terminal title="Example output"
    [{"configMap":{"defaultMode":420,"name":"trusted-ca"},"name":"trusted-ca"}]
    ```