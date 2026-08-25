{%- set _mod_docs_content_type = "REFERENCE" %}
# Restricted network installation with initial network access {id="samples-operator-restricted-nw-install-with-access_{{ context }}"}

If a cluster that eventually runs on a restricted network is first installed while network access exists, the Cluster Samples Operator installs content from `registry.redhat.io`. {._abstract}

In this case, you can defer samples installation until you have decided which samples are needed by overriding the default configuration of `Managed` for a connected installation.

If you want the Cluster Samples Operator to bootstrap with the management state as `Removed` during an installation that has initial network access, override the Cluster Samples Operator default configuration by using the following instructions:

*   [Customizing nodes](https://docs.redhat.com/en/documentation/openshift_container_platform/latest/html/installation_configuration/installing-customizing)

To host samples in your restricted environment, use the following instructions:

*   [Using the Cluster Samples Operator with an alternate registry](https://docs.redhat.com/en/documentation/openshift_container_platform/latest/html/images/samples-operator-alt-registry)

You must also put the following additional YAML file in the `openshift` directory created by the `openshift-install create manifest` process:

```yaml title="Example Cluster Samples Operator YAML file with managementState: Removed"
apiVersion: samples.operator.openshift.io/v1
kind: Config
metadata:
  name: cluster
spec:
  architectures:
  - x86_64
  managementState: Removed
```