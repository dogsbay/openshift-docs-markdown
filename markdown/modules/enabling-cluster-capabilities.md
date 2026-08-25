{%- set _mod_docs_content_type = "REFERENCE" %}
# Enabling cluster capabilities {id="enabling-cluster-capabilities_{{ context }}"}

If you are using an installation method that includes customizing your cluster by creating an `install-config.yaml` file, you can select which cluster capabilities you want to make available on the cluster. {._abstract}


:::note

If you customize your cluster by enabling or disabling specific cluster capabilities, you must manually maintain your `install-config.yaml` file. New {{ product_title }} updates might declare new capability handles for existing components, or introduce new components altogether. Users who customize their `install-config.yaml` file should consider periodically updating their `install-config.yaml` file as {{ product_title }} is updated.

:::


You can use the following configuration parameters to select cluster capabilities:

```yaml
capabilities:
  baselineCapabilitySet: v4.11
  additionalEnabledCapabilities:
  - CSISnapshot
  - Console
  - Storage
```


`capabilities.baselineCapabilitySet`
:   Specifies a baseline set of capabilities to install. Valid values are `None`, `vCurrent` and `v4.x`. If you select `None`, all optional capabilities are disabled. The default value is `vCurrent`, which enables all optional capabilities.


:::note

`v4.x` refers to any value up to and including the current cluster version.
For example, valid values for a {{ product_title }} 4.12 cluster are `v4.11` and `v4.12`.

:::



`capabilities.additionalEnabledCapabilities`
:   Specifies a list of capabilities to explicitly enable. These capabilities are enabled in addition to the capabilities specified in `baselineCapabilitySet`.


:::note

In this example, the default capability is set to `v4.11`. The `additionalEnabledCapabilities` field enables additional capabilities over the default `v4.11` capability set.

:::