{%- set _mod_docs_content_type = "REFERENCE" %}
# Sample customized install-config.yaml file for AWS {id="installation-aws-config-yaml-customizations_{{ context }}"}

You can customize the installation configuration file (`install-config.yaml`) to specify more details about your {{ product_title }} cluster’s platform or modify the values of the required parameters. {._abstract}


:::important

This sample YAML file is provided for reference only. You must obtain your `install-config.yaml` file by using the installation program and modify it.
For a full list and description of all installation configuration parameters, see _Installation configuration parameters for AWS_.

:::


```yaml title="Sample install-config.yaml file for {{ aws_short }}"
apiVersion: v1
baseDomain: example.com
sshKey: ssh-ed25519 AAAA...
pullSecret: '{"auths": ...}'
metadata:
  name: example-cluster
controlPlane:
  name: master
  platform:
    aws:
      type: m6i.xlarge
  replicas: 3
compute:
-  name: worker
  platform:
    aws:
      type: c5.4xlarge
  replicas: 3
networking:
  clusterNetwork:
  - cidr: 10.128.0.0/14
    hostPrefix: 23
platform:
  aws:
    region: us-west-2
```

*   Parameters at the first level of indentation apply to the cluster globally.
*   The `controlPlane` stanza applies to control plane machines.
*   The `compute` stanza applies to compute machines.
*   The `networking` stanza applies to the cluster networking configuration. If you do not provide networking values, the installation program provides default values.
*   The `platform` stanza applies to the infrastructure platform that hosts the cluster.