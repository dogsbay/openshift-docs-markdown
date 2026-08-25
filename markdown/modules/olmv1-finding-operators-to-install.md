{%- set _mod_docs_content_type = "PROCEDURE" %}

# Finding Operators to install from a catalog {id="olmv1-finding-operators-to-install_{{ context }}"}

After you add a catalog to your cluster, you can query the catalog to find Operators and extensions to install. {._abstract}

{% include "./snippets/olmv1-on-cluster-catalog-queries.md" %}

**Prerequisites**

*   You have added a catalog to your cluster.
*   You have installed the `jq` CLI tool.
*   You have installed the `opm` CLI tool.

**Procedure**

1.  To return a list of extensions that support the `AllNamespaces` install mode and do not use webhooks, enter the following command:
    ```terminal
    $ opm render <catalog_registry_url>:<tag> \
      | jq -cs '[.[] | select(.schema == "olm.bundle" \
      and (.properties[] | select(.type == "olm.csv.metadata").value.installModes[] \
      | select(.type == "AllNamespaces" and .supported == true)) \
      and .spec.webhookdefinitions == null) | .package] | unique[]'
    ```

    where:

    `catalog_registry_url`
    :   Specifies the URL of the catalog registry, such as `registry.redhat.io/redhat/redhat-operator-index`.

    `tag`
    :   Specifies the tag or version of the catalog, such as `v{{ product_version }}`{minja} or `latest`.
    ```terminal title="Example command" {minja}
    $ opm render \
      registry.redhat.io/redhat/redhat-operator-index:v{{ product_version }} \
      | jq -cs '[.[] | select(.schema == "olm.bundle" \
      and (.properties[] | select(.type == "olm.csv.metadata").value.installModes[] \
      | select(.type == "AllNamespaces" and .supported == true)) \
      and .spec.webhookdefinitions == null) | .package] | unique[]'
    ```
    ```text title="Example output"
    "3scale-operator"
    "amq-broker-rhel8"
    "amq-online"
    "amq-streams"
    "amq-streams-console"
    "ansible-automation-platform-operator"
    "ansible-cloud-addons-operator"
    "apicast-operator"
    "authorino-operator"
    "aws-load-balancer-operator"
    "bamoe-kogito-operator"
    "cephcsi-operator"
    "cincinnati-operator"
    "cluster-logging"
    "cluster-observability-operator"
    "compliance-operator"
    "container-security-operator"
    "cryostat-operator"
    "datagrid"
    "devspaces"
    ...
    ```

1.  Inspect the contents of an extension’s metadata by running the following command:
    ```terminal
    $ opm render <catalog_registry_url>:<tag> \
      | jq -s '.[] | select( .schema == "olm.package") \
      | select( .name == "<package_name>")'
    ```
    ```terminal title="Example command" {minja}
    $ opm render \
      registry.redhat.io/redhat/redhat-operator-index:v{{ product_version }} \
      | jq -s '.[] | select( .schema == "olm.package") \
      | select( .name == "openshift-pipelines-operator-rh")'
    ```
    ```text title="Example output"
    {
      "schema": "olm.package",
      "name": "openshift-pipelines-operator-rh",
      "defaultChannel": "latest",
      "icon": {
        "base64data": "iVBORw0KGgoAAAANSUhE...",
        "mediatype": "image/png"
      }
    }
    ```