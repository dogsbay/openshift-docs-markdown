{%- set _mod_docs_content_type = "REFERENCE" %}
# Image set configuration examples {id="oc-mirror-image-set-examples_{{ context }}"}

You can use `ImageSetConfiguration` file examples to understand the configuration for various mirroring use cases. {._abstract}

## Use case: Including the shortest {{ product_title }} update path {id="oc-mirror-image-set-examples-shortest-upgrade-path_{{ context }}"}

The following `ImageSetConfiguration` file uses a local storage backend and includes all {{ product_title }} versions along the shortest update path from the minimum version of `4.11.37` to the maximum version of `4.12.15`.

```yaml title="Example ImageSetConfiguration file"
apiVersion: mirror.openshift.io/v1alpha2
kind: ImageSetConfiguration
storageConfig:
  local:
    path: /home/user/metadata
mirror:
  platform:
    channels:
      - name: stable-4.12
        minVersion: 4.11.37
        maxVersion: 4.12.15
        shortestPath: true
```

## Use case: Including all versions of {{ product_title }} from a minimum to the latest version for multi-architecture releases {id="oc-mirror-image-set-examples-minimum-to-latest_{{ context }}"}

The following `ImageSetConfiguration` file uses a registry storage backend and includes all {{ product_title }} versions starting at a minimum version of `4.13.4` to the latest version in the channel. On every invocation of oc-mirror with this image set configuration, the latest release of the `stable-4.13` channel is evaluated, so running oc-mirror at regular intervals ensures that you automatically receive the latest releases of {{ product_title }} images.

By setting the value of `platform.architectures` to `multi`, you can ensure that the mirroring is supported for multi-architecture releases.

```yaml title="Example ImageSetConfiguration file"
apiVersion: mirror.openshift.io/v1alpha2
kind: ImageSetConfiguration
storageConfig:
  registry:
    imageURL: example.com/mirror/oc-mirror-metadata
    skipTLS: false
mirror:
  platform:
    architectures:
      - "multi"
    channels:
      - name: stable-4.13
        minVersion: 4.13.4
        maxVersion: 4.13.6
```

## Use case: Including Operator versions from a minimum to the latest {id="oc-mirror-image-set-examples-operator-versions_{{ context }}"}

The following `ImageSetConfiguration` file uses a local storage backend and includes only the Red Hat Advanced Cluster Security for Kubernetes Operator, versions starting at 4.0.1 and later in the `stable` channel.


:::note

When you specify a minimum or maximum version range, you might not receive all Operator versions in that range.

By default, oc-mirror excludes any versions that are skipped or replaced by a newer version in the Operator Lifecycle Manager (OLM) specification. Operator versions that are skipped might be affected by a CVE or contain bugs. Use a newer version instead. For more information on skipped and replaced versions, see [Creating an update graph with OLM](https://olm.operatorframework.io/docs/concepts/olm-architecture/operator-catalog/creating-an-update-graph/).

To receive all Operator versions in a specified range, you can set the `mirror.operators.full` field to `true`.

:::


```yaml title="Example ImageSetConfiguration file"
apiVersion: mirror.openshift.io/v1alpha2
kind: ImageSetConfiguration
storageConfig:
  local:
    path: /home/user/metadata
mirror:
  operators:
    - catalog: registry.redhat.io/redhat/redhat-operator-index:v{{ product_version }}
      packages:
        - name: rhacs-operator
          channels:
          - name: stable
            minVersion: 4.0.1
```


:::note

To specify a maximum version instead of the latest, set the `mirror.operators.packages.channels.maxVersion` field.

:::


## Use case: Including the Nutanix CSI Operator {id="oc-mirror-image-set-examples-nutanix-operator_{{ context }}"}
The following `ImageSetConfiguration` file uses a local storage backend and includes the Nutanix CSI Operator, the OpenShift Update Service (OSUS) graph image, and an additional Red Hat Universal Base Image (UBI).

```yaml title="Example ImageSetConfiguration file"
kind: ImageSetConfiguration
apiVersion: mirror.openshift.io/v1alpha2
storageConfig:
  registry:
    imageURL: mylocalregistry/ocp-mirror/openshift4
    skipTLS: false
mirror:
  platform:
    channels:
    - name: stable-4.11
      type: ocp
    graph: true
  operators:
  - catalog: registry.redhat.io/redhat/certified-operator-index:v{{ product_version }}
    packages:
    - name: nutanixcsioperator
      channels:
      - name: stable
  additionalImages:
  - name: registry.redhat.io/ubi9/ubi:latest
```

## Use case: Including the default Operator channel {id="oc-mirror-image-set-examples-default-channel_{{ context }}"}

The following `ImageSetConfiguration` file includes the `stable-5.7` and `stable` channels for the OpenShift Elasticsearch Operator. Even if only the packages from the `stable-5.7` channel are needed, the `stable` channel must also be included in the `ImageSetConfiguration` file, because it is the default channel for the Operator. You must always include the default channel for the Operator package even if you do not use the bundles in that channel.


:::tip

You can find the default channel by running the following command: `oc mirror list operators --catalog=<catalog_name> --package=<package_name> --v1`.

:::


```yaml title="Example ImageSetConfiguration file"
apiVersion: mirror.openshift.io/v1alpha2
kind: ImageSetConfiguration
storageConfig:
  registry:
    imageURL: example.com/mirror/oc-mirror-metadata
    skipTLS: false
mirror:
  operators:
  - catalog: registry.redhat.io/redhat/redhat-operator-index:v{{ product_version }}
    packages:
    - name: elasticsearch-operator
      channels:
      - name: stable-5.7
      - name: stable
```

## Use case: Including an entire catalog (all versions) {id="oc-mirror-image-set-examples-entire-catalog-full_{{ context }}"}

The following `ImageSetConfiguration` file sets the `mirror.operators.full` field to `true` to include all versions for an entire Operator catalog.

```yaml title="Example ImageSetConfiguration file"
apiVersion: mirror.openshift.io/v1alpha2
kind: ImageSetConfiguration
storageConfig:
  registry:
    imageURL: example.com/mirror/oc-mirror-metadata
    skipTLS: false
mirror:
  operators:
    - catalog: registry.redhat.io/redhat/redhat-operator-index:v{{ product_version }}
      full: true
```

## Use case: Including an entire catalog (channel heads only) {id="oc-mirror-image-set-examples-entire-catalog-heads_{{ context }}"}

The following `ImageSetConfiguration` file includes the channel heads for an entire Operator catalog.

By default, for each Operator in the catalog, oc-mirror includes the latest Operator version (channel head) from the default channel. If you want to mirror all Operator versions, and not just the channel heads, you must set the `mirror.operators.full` field to `true`.

This example also uses the `targetCatalog` field to specify an alternative namespace and name to mirror the catalog as.

```yaml title="Example ImageSetConfiguration file"
apiVersion: mirror.openshift.io/v1alpha2
kind: ImageSetConfiguration
storageConfig:
  registry:
    imageURL: example.com/mirror/oc-mirror-metadata
    skipTLS: false
mirror:
  operators:
  - catalog: registry.redhat.io/redhat/redhat-operator-index:v{{ product_version }}
    targetCatalog: my-namespace/my-operator-catalog
```

## Use case: Including arbitrary images and helm charts {id="oc-mirror-image-set-examples-helm_{{ context }}"}

The following `ImageSetConfiguration` file uses a registry storage backend and includes helm charts and an additional Red Hat Universal Base Image (UBI).

```yaml title="Example ImageSetConfiguration file"
apiVersion: mirror.openshift.io/v1alpha2
kind: ImageSetConfiguration
archiveSize: 4
storageConfig:
  registry:
    imageURL: example.com/mirror/oc-mirror-metadata
    skipTLS: false
mirror:
 platform:
   architectures:
     - "s390x"
   channels:
     - name: stable-{{ product_version }}
 operators:
   - catalog: registry.redhat.io/redhat/redhat-operator-index:v{{ product_version }}
 helm:
   repositories:
     - name: redhat-helm-charts
       url: https://raw.githubusercontent.com/redhat-developer/redhat-helm-charts/master
       charts:
         - name: ibm-mongodb-enterprise-helm
           version: 0.2.0
 additionalImages:
   - name: registry.redhat.io/ubi9/ubi:latest
```

## Use case: Including the upgrade path for EUS releases {id="oc-mirror-image-set-examples-eus_{{ context }}"}

The following `ImageSetConfiguration` file includes the `eus-<version>` channel, where the `maxVersion` value is at least two minor versions higher than the `minVersion` value.

For example, in this `ImageSetConfiguration` file, the `minVersion` is set to `4.12.28`, while the `maxVersion` for the `eus-4.14` channel is `4.14.16`.

```yaml title="Example ImageSetConfiguration file"
kind: ImageSetConfiguration
apiVersion: mirror.openshift.io/v2alpha1
mirror:
  platform:
    graph: true # Required for the OSUS Operator
    architectures:
    - amd64
    channels:
    - name: stable-4.12
      minVersion: '4.12.28'
      maxVersion: '4.12.28'
      shortestPath: true
      type: ocp
    - name: eus-4.14
      minVersion: '4.12.28'
      maxVersion: '4.14.16'
      shortestPath: true
      type: ocp
```

## Use case: Including the multi-arch {{ product_title }} images and catalog for {{ mce_short }} {id="oc-mirror-image-set-examples-mce-images-catalog-ocp_{{ context }}"}

The following `ImageSetConfiguration` file includes {{ mce }} and all {{ product_title }} versions starting at a minimum version of `{{ product_version }}.0` in the channel.

```yaml title="Example ImageSetConfiguration file"
apiVersion: mirror.openshift.io/v1alpha2
kind: ImageSetConfiguration
storageConfig:
  registry:
    imageURL: agent.agent.example.com:5000/openshift/release/metadata:latest/openshift/release/metadata:latest
mirror:
  platform:
    architectures:
      - "multi"
    channels:
    - name: stable-4.22
      minVersion: 4.22.0
      maxVersion: 4.22.1
      type: ocp
  operators:
    - catalog: registry.redhat.io/redhat/redhat-operator-index:v4.22
      packages:
        - name: multicluster-engine
```