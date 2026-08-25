{%- set _mod_docs_content_type = "PROCEDURE" %}
# Enabling the SiteConfig addon for migration {id="ztp-clusterinstance-components_{{ context }}"}

The SiteConfig Operator reconciles the `ClusterInstance` custom resource (CR). To deploy the SiteConfig Operator, you must enable the SiteConfig Addon in {{ rh_rhacm_first }}.

**Prerequisites**

*   You have logged in to the hub cluster as a user with `cluster-admin` privileges.
*   You have configured your {{ ztp }} environment successfully.
*   You have deployed {{ rh_rhacm_first }} version 2.12 or later.

**Procedure**

*   Enable the SiteConfig add-on by running the following command:
    ```bash
    $ oc -n <namespace> patch multiclusterhubs.operator.open-cluster-management.io multiclusterhub --type json --patch '[{"op": "add", "path":"/spec/overrides/components/-", "value": {"name":"siteconfig","enabled": true}}]'
    ```
*   Replace `<namespace>` with the namespace where {{ rh_rhacm }} is installed, for example `open-cluster-management`.
    ```bash title="Example output"
    multiclusterhub.operator.open-cluster-management.io/multiclusterhub patched
    ```

**Verification**

*   Check the status of the SiteConfig Operator by running the following command:
    ```bash
    $ oc -n <namespace> get po | grep siteconfig
    ```
    ```bash title="Example output"
    siteconfig-controller-manager-6c864fb6b9-kvbv9                  2/2     Running   0         43s
    ```