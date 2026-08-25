{%- set _mod_docs_content_type = "REFERENCE" %}
# Sample customized install-config.yaml file for {{ gcp_full }} {id="installation-gcp-config-yaml_{{ context }}"}

To specify more details about your {{ product_title }} cluster’s platform or modify the values of the required parameters, you can customize the `install-config.yaml` file. {._abstract}


:::important

This sample YAML file is provided for reference only. You must obtain your `install-config.yaml` file by using the installation program and modify it.

:::


```yaml
apiVersion: v1
baseDomain: example.com
pullSecret: '{"auths": ...}'
controlPlane:
  name: master
  replicas: 3
  platform:
    gcp:
      type: n2-standard-4
compute:
- name: worker
  replicas: 3
  platform:
    gcp:
      type: n2-standard-4
metadata:
  name: test-cluster
networking:
  clusterNetwork:
  - cidr: 10.128.0.0/14
    hostPrefix: 23
platform:
  gcp:
    projectID: sample-project
    region: us-east1
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