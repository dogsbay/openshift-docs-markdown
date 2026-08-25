{%- set _mod_docs_content_type = "CONCEPT" %}
# About OADP Velero plugins {id="oadp-configuring-velero-plugins_{{ context }}"}

Review how to configure default cloud provider plugins or install custom plugins during the {{ oadp_short }} deployment to connect your specific storage solutions. This helps you to successfully back up and restore resources across your environments. {._abstract}

## Default Velero cloud provider plugins {id="_default_velero_cloud_provider_plugins"}

You can install any of the following default Velero cloud provider plugins when you configure the `oadp_v1alpha1_dpa.yaml` file during deployment:

*   `aws` (Amazon Web Services)
{%- if not (openshift_rosa or openshift_rosa_hcp) %}
*   `gcp` ({{ gcp_full }})
*   `azure` (Microsoft Azure)
{%- endif %}
*   `openshift` (OpenShift Velero plugin)
*   `csi` (Container Storage Interface)
*   `kubevirt` (KubeVirt)

You specify the desired default plugins in the `oadp_v1alpha1_dpa.yaml` file during deployment.

The following `.yaml` file installs the `openshift`, `aws`, `azure`, and `gcp` plugins:

```yaml
 apiVersion: oadp.openshift.io/v1alpha1
 kind: DataProtectionApplication
 metadata:
   name: dpa-sample
 spec:
   configuration:
     velero:
       defaultPlugins:
       - openshift
       - aws
       - azure
       - gcp
```

## Custom Velero plugins {id="_custom_velero_plugins"}

You can install a custom Velero plugin by specifying the plugin `image` and `name` when you configure the `oadp_v1alpha1_dpa.yaml` file during deployment.

You specify the desired custom plugins in the `oadp_v1alpha1_dpa.yaml` file during deployment.

The following `.yaml` file installs the default `openshift`, `azure`, and `gcp` plugins and a custom plugin that has the name `custom-plugin-example` and the image `quay.io/example-repo/custom-velero-plugin`:

```yaml
apiVersion: oadp.openshift.io/v1alpha1
kind: DataProtectionApplication
metadata:
 name: dpa-sample
spec:
 configuration:
   velero:
     defaultPlugins:
     - openshift
     - azure
     - gcp
     customPlugins:
     - name: custom-plugin-example
       image: quay.io/example-repo/custom-velero-plugin
```