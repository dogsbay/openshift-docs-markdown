{%- set _mod_docs_content_type = "CONCEPT" %}

# Configure FIPS through the Agent-based Installer {id="agent-installer-configuring-fips-compliance_{{ context }}"}

During a cluster deployment, the Federal Information Processing Standards (FIPS) change is applied when the Red Hat Enterprise Linux CoreOS (RHCOS) machines are deployed in your cluster. For Red Hat Enterprise Linux (RHEL) machines, you must enable FIPS mode when you install the operating system on the machines that you plan to use as worker machines. {._abstract}


:::important

{{ product_title }} requires the use of a FIPS-capable installation binary to install a cluster in FIPS mode.

:::


You can enable FIPS mode through the preferred method of `install-config.yaml` and `agent-config.yaml` files:

You must set value of the `fips` field to `true` in the `install-config.yaml` file:

```yaml title="Sample install-config.yaml.file"
apiVersion: v1
baseDomain: test.example.com
metadata:
  name: sno-cluster
fips: true
```


:::important

To enable FIPS mode on {{ ibm_z_name }} clusters, you must also enable FIPS in either the `.parm` file or using `virt-install` as outlined in the procedures for manually adding {{ ibm_z_name }} agents.

:::


If you are using the optional {{ ztp }} manifests, you must set the value of `fips` as `true` in the `agent-install.openshift.io/install-config-overrides` field in the `agent-cluster-install.yaml` file:

```yaml title="Sample agent-cluster-install.yaml file"
apiVersion: extensions.hive.openshift.io/v1beta1
kind: AgentClusterInstall
metadata:
  annotations:
    agent-install.openshift.io/install-config-overrides: '{"fips":true}'
  name: sno-cluster
  namespace: sno-cluster-test
```