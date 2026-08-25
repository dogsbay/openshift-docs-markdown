{%- set _mod_docs_content_type = "REFERENCE" %}
# Sample customized install-config.yaml file for Azure {id="installation-azure-config-yaml-simple_{{ context }}"}

You can customize the `install-config.yaml` file to specify more details about your {{ product_title }} cluster’s platform or modify the values of the required parameters. {._abstract}


:::important

This sample YAML file is provided for reference only. You must obtain your `install-config.yaml` file by using the installation program and modify it.
For a full list and description of all installation configuration parameters, see _Installation configuration parameters for Azure_.

:::


```yaml title="Sample install-config.yaml file for {{ azure_short }}"
apiVersion: v1
baseDomain: example.com
pullSecret: '{"auths": ...}'
sshKey: ssh-ed25519 AAAA...
metadata:
  name: example-cluster
controlPlane:
  hyperthreading: Enabled
  name: master
  platform:
    azure:
      type: Standard_D8s_v3
  replicas: 3
compute:
- hyperthreading: Enabled
  name: worker
  platform:
    azure:
      type: Standard_D2s_v3
  replicas: 3
networking:
  clusterNetwork:
  - cidr: 10.128.0.0/14
    hostPrefix: 23
platform:
  azure:
    baseDomainResourceGroupName: example-basedomain-resourcegroup-name
    region: centralus
```
where:


`controlPlane`
:   Specifies parameters that apply to control plane machines.

`compute`
:   Specifies parameters that apply to compute machines.

`networking`
:   Specifies parameters that apply to the cluster networking configuration. If you do not provide networking values, the installation program provides default values.

`platform`
:   Specifies parameters that apply to the infrastructure platform that hosts the cluster.