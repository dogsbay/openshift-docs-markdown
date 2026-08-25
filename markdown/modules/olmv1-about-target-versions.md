{%- set _mod_docs_content_type = "REFERENCE" %}

# Example custom resources (CRs) that specify a target version {id="olmv1-about-target-versions_{{ context }}"}

In {{ olmv1_first }}, cluster administrators can declaratively set the target version of an Operator or extension in the custom resource (CR). {._abstract}

You can define a target version by specifying any of the following fields:

*   Channel
*   Version number
*   Version range

If you specify a channel in the CR, {{ olmv1 }} installs the latest version of the Operator or extension that can be resolved within the specified channel. When updates are published to the specified channel, {{ olmv1 }} automatically updates to the latest release that can be resolved from the channel.

```yaml title="Example CR with a specified channel"
apiVersion: olm.operatorframework.io/v1
  kind: ClusterExtension
  metadata:
    name: <clusterextension_name>
  spec:
    namespace: <installed_namespace>
    serviceAccount:
      name: <service_account_installer_name>
    source:
      sourceType: Catalog
      catalog:
        packageName: <package_name>
        channels:
          - latest
```
Installs the latest release that can be resolved from the specified channel. Updates to the channel are automatically installed. Specify the value of the `channels` parameter as an array. This field is optional

If you specify the Operator or extension’s target version in the CR, {{ olmv1 }} installs the specified version. When the target version is specified in the CR, {{ olmv1 }} does not change the target version when updates are published to the catalog.

If you want to update the version of the Operator that is installed on the cluster, you must manually edit the Operator’s CR. Specifying an Operator’s target version pins the Operator’s version to the specified release.

```yaml title="Example CR with the target version specified"
apiVersion: olm.operatorframework.io/v1
  kind: ClusterExtension
  metadata:
    name: <clusterextension_name>
  spec:
    namespace: <installed_namespace>
    serviceAccount:
      name: <service_account_installer_name>
    source:
      sourceType: Catalog
      catalog:
        packageName: <package_name>
        version: "1.11.1"
```
Specifies the target version. If you want to update the version of the Operator or extension that is installed, you must manually update this field the CR to the desired target version. This field is optional.

If you want to define a range of acceptable versions for an Operator or extension, you can specify a version range by using a comparison string. When you specify a version range, {{ olmv1 }} installs the latest version of an Operator or extension that can be resolved by the Operator Controller.

```yaml title="Example CR with a version range specified"
apiVersion: olm.operatorframework.io/v1
  kind: ClusterExtension
  metadata:
    name: <clusterextension_name>
  spec:
    namespace: <installed_namespace>
    serviceAccount:
      name: <service_account_installer_name>
    source:
      sourceType: Catalog
      catalog:
        packageName: <package_name>
        version: ">1.11.1"
```
Specifies that the desired version range is greater than version `1.11.1`. This field is optional.

After you create or update a CR, apply the configuration file by running the following command:

```terminal title="Command syntax"
$ oc apply -f <extension_name>.yaml
```