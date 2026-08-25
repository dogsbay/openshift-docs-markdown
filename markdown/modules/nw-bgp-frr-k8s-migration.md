{%- set _mod_docs_content_type = "PROCEDURE" %}
# Migrating FRR-K8s resources {id="nw-bgp-frr-k8s-migration_{{ context }}"}

You can migrate the FRR-K8s `FRRConfiguration` custom resources from the `metallb-system` namespace to the `openshift-frr-k8s` namespace. {._abstract}

When upgrading from an earlier version of {{ product_title }} with the Metal LB Operator deployed, you must manually migrate your custom `FRRConfiguration` configurations from the `metallb-system` namespace to the `openshift-frr-k8s` namespace.

**Prerequisites**

*   You have installed the {{ oc_first }}.
*   You are logged in to the cluster as a user with the `cluster-admin` role.

**Procedure**

1.  To create the `openshift-frr-k8s` namespace, enter the following command:
    ```terminal
    $ oc create namespace openshift-frr-k8s
    ```
1.  To automate the migration, create a shell script named `migrate.sh` with the following contents:
    ```bash
    #!/bin/bash
    OLD_NAMESPACE="metallb-system"
    NEW_NAMESPACE="openshift-frr-k8s"
    FILTER_OUT="metallb-"
    oc get frrconfigurations.frrk8s.metallb.io -n "${OLD_NAMESPACE}" -o json |\
      jq -r '.items[] | select(.metadata.name | test("'"${FILTER_OUT}"'") | not)' |\
      jq -r '.metadata.namespace = "'"${NEW_NAMESPACE}"'"' |\
      oc create -f -
    ```
1.  To execute the migration, run the following command:
    ```terminal
    $ bash migrate.sh
    ```

**Verification**

*   To confirm that the migration succeeded, run the following command:
    ```terminal
    $ oc get frrconfigurations.frrk8s.metallb.io -n openshift-frr-k8s
    ```

After the migration is complete, you can remove the `FRRConfiguration` custom resources from the `metallb-system` namespace.