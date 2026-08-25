{%- set _mod_docs_content_type = "REFERENCE" %}
# Mirror registry update examples {id="oc-mirror-image-set-examples-add-images_{{ context }}"}

You can update mirror registry content by modifying the `ImageSetConfiguration` file to mirror a specific version, update Operators, or prune existing images. {._abstract}

This section covers the use cases for updating the mirror registry from disk to mirror.

```yaml title="Example ImageSetConfiguration file that was previously used for mirroring"
apiVersion: mirror.openshift.io/v1alpha2
kind: ImageSetConfiguration
storageConfig:
  local:
    path: /home/user/metadata
mirror:
  platform:
    channels:
      - name: stable-4.12
        minVersion: 4.12.1
        maxVersion: 4.12.1
  operators:
    - catalog: registry.redhat.io/redhat/redhat-operator-index:v4.14
      packages:
        - name: rhacs-operator
          channels:
          - name: stable
```

## Mirroring a specific {{ product_title }} version by pruning the existing images {id="_mirroring_a_specific_product_title_version_by_pruning_the_existing_images"}

```yaml title="Updated ImageSetConfiguration file"
apiVersion: mirror.openshift.io/v1alpha2
kind: ImageSetConfiguration
storageConfig:
  local:
    path: /home/user/metadata
mirror:
  platform:
    channels:
      - name: stable-4.13
  operators:
    - catalog: registry.redhat.io/redhat/redhat-operator-index:v4.14
      packages:
        - name: rhacs-operator
          channels:
          - name: stable
```

Specifying `mirror.platform.channels.name` as `stable-4.13` prunes all the images of `stable-4.12`.

## Updating to the latest version of an Operator by pruning the existing images {id="_updating_to_the_latest_version_of_an_operator_by_pruning_the_existing_images"}

```yaml title="Updated ImageSetConfiguration file"
apiVersion: mirror.openshift.io/v1alpha2
kind: ImageSetConfiguration
storageConfig:
  local:
    path: /home/user/metadata
mirror:
  platform:
    channels:
      - name: stable-4.12
        minVersion: 4.12.1
        maxVersion: 4.12.1
  operators:
    - catalog: registry.redhat.io/redhat/redhat-operator-index:v4.14
      packages:
        - name: rhacs-operator
          channels:
          - name: stable
```

Using the same channel for `operators.packages.channels.name` without specifying a version prunes the existing images and updates with the latest version of images.

## Mirroring a new Operator by pruning the existing Operator {id="oc-mirror-image-set-examples-operator-pruning-versions_{{ context }}"}

```yaml title="Updated ImageSetConfiguration file"
apiVersion: mirror.openshift.io/v1alpha2
kind: ImageSetConfiguration
storageConfig:
  local:
    path: /home/user/metadata
mirror:
  platform:
    channels:
      - name: stable-4.12
        minVersion: 4.12.1
        maxVersion: 4.12.1
  operators:
    - catalog: registry.redhat.io/redhat/redhat-operator-index:v4.14
      packages:
        - name: <new_operator_name>
          channels:
          - name: stable
```

Replacing `rhacs-operator` with `new_operator_name` prunes the Red Hat Advanced Cluster Security for Kubernetes Operator.

## Pruning all the {{ product_title }} images {id="_pruning_all_the_product_title_images"}

```yaml title="Updated ImageSetConfiguration file"
apiVersion: mirror.openshift.io/v1alpha2
kind: ImageSetConfiguration
storageConfig:
  local:
    path: /home/user/metadata
mirror:
  platform:
    channels:
  operators:
    - catalog: registry.redhat.io/redhat/redhat-operator-index:v4.14
      packages:
```