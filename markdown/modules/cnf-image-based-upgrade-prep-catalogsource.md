{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating ConfigMap objects of custom catalog sources for the image-based upgrade with {{ lcao }} {id="cnf-image-based-upgrade-prep-catalogsources_{{ context }}"}

You can keep your custom catalog sources after the upgrade by generating a `ConfigMap` object for your catalog sources and adding them to the `spec.extraManifest` field in the `ImageBasedUpgrade` CR.
For more information about catalog sources, see "Catalog source". {._abstract}

**Procedure**

1.  Create a YAML file that contains the `CatalogSource` CR:
    ```yaml
    apiVersion: operators.coreos.com/v1
    kind: CatalogSource
    metadata:
      name: example-catalogsources
      namespace: openshift-marketplace
    spec:
      sourceType: grpc
      displayName: disconnected-redhat-operators
      image: quay.io/example-org/example-catalog:v1
    ```
1.  Create the `ConfigMap` object by running the following command:
    ```terminal
    $ oc create configmap example-catalogsources-cm --from-file=example-catalogsources.yaml=<path_to_catalogsource_cr> -n openshift-lifecycle-agent
    ```
1.  Patch the `ImageBasedUpgrade` CR by running the following command:
    ```terminal
    $ oc patch imagebasedupgrades.lca.openshift.io upgrade \
      -p='{"spec": {"extraManifests": [{"name": "example-catalogsources-cm", "namespace": "openshift-lifecycle-agent"}]}}' \
      --type=merge -n openshift-lifecycle-agent
    ```