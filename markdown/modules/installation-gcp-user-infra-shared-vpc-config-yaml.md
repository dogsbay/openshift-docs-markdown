{%- set _mod_docs_content_type = "REFERENCE" %}
# Sample customized `install-config.yaml` file for {{ gcp_short }} {id="installation-gcp-user-infra-shared-vpc-config-yaml_{{ context }}"}

You can customize the `install-config.yaml` file to specify more details about your {{ product_title }} cluster’s platform or modify the values of the required parameters. {._abstract}


:::important

This sample YAML file is provided for reference only. You must obtain your `install-config.yaml` file by using the installation program and modify it.

:::


```yaml {minja}
apiVersion: v1
baseDomain: example.com
controlPlane:
  hyperthreading: Enabled
  name: master
  platform:
    gcp:
      type: n2-standard-4
      zones:
      - us-central1-a
      - us-central1-c
      tags:
      - control-plane-tag1
      - control-plane-tag2
  replicas: 3
compute:
- hyperthreading: Enabled
  name: worker
  platform:
    gcp:
      type: n2-standard-4
      zones:
      - us-central1-a
      - us-central1-c
      tags:
      - compute-tag1
      - compute-tag2
  replicas: 0
metadata:
  name: test-cluster
networking:
  clusterNetwork:
  - cidr: 10.128.0.0/14
    hostPrefix: 23
  machineNetwork:
  - cidr: 10.0.0.0/16
  networkType: OVNKubernetes
  serviceNetwork:
  - 172.30.0.0/16
platform:
  gcp:
    defaultMachinePlatform:
      tags:
      - global-tag1
      - global-tag2
    projectID: openshift-production
    region: us-central1
pullSecret: '{"auths": ...}'
{%- if not openshift_origin %}
fips: false
sshKey: ssh-ed25519 AAAA...
publish: Internal
{%- endif %}
{%- if openshift_origin %}
sshKey: ssh-ed25519 AAAA...
publish: Internal
{%- endif %}
```
where:


`baseDomain`
:   Specifies the public DNS on the host project.

`controlPlane`
:   Specifies the parameters that apply to control plane machines. The `controlPlane` section is a single mapping. To meet the requirements of the different data structures, the first line of the `compute` section must begin with a hyphen, `-`, and the first line of the `controlPlane` section must not. Only one control plane pool is used. If you do not provide these parameters and values, the installation program provides the default value.

`compute`
:   Specifies the parameters that apply to compute machines. The `compute` section is a sequence of mappings. To meet the requirements of the different data structures, the first line of the `compute` section must begin with a hyphen, `-`, and the first line of the `controlPlane` section must not. Although both sections currently define a single machine pool, it is possible that future versions of {{ product_title }} will support defining multiple compute pools during installation. If you do not provide these parameters and values, the installation program provides the default value.

`hyperthreading`
:   Specifies whether to enable or disable simultaneous multithreading, or `hyperthreading`. By default, simultaneous multithreading is enabled to increase the performance of your machines' cores. You can disable it by setting the parameter value to `Disabled`. If you disable simultaneous multithreading in some cluster machines, you must disable it in all cluster machines.

    :::important


    If you disable simultaneous multithreading, ensure that your capacity planning accounts for the dramatically decreased machine performance. Use larger machine types, such as `n1-standard-8`, for your machines if you disable simultaneous multithreading.
    
    :::


`tags`
:   Specifies a set of network tags to apply to the control plane or compute machine sets. The `platform.gcp.defaultMachinePlatform.tags` parameter applies to both control plane and compute machines. If the `compute.platform.gcp.tags` or `controlPlane.platform.gcp.tags` parameters are set, they override the `platform.gcp.defaultMachinePlatform.tags` parameter. This parameter is optional.

`networkType`
:   Specifies the cluster network plugin to install. The default value `OVNKubernetes` is the only supported value.

`projectID`
:   Specifies the main project where the VM instances reside.

`region`
:   Specifies the region that your VPC network is in.
{%- if not openshift_origin %}

`fips`
:   Specifies whether to enable or disable FIPS mode. By default, FIPS mode is not enabled. If FIPS mode is enabled, the {{ op_system_first }} machines that {{ product_title }} runs on bypass the default Kubernetes cryptography suite and use the cryptography modules that are provided with {{ op_system }} instead.
    {% include "./snippets/fips-snippet.md" %}

`sshKey`
:   Specifies the `sshKey` value that you use to access the machines in your cluster. This parameter is optional.
{%- endif %}
{%- if openshift_origin %}

`sshKey`
:   Specifies the `sshKey` value that you use to access the machines in your cluster. This parameter is optional.
{%- endif %}

    :::note


    For production {{ product_title }} clusters on which you want to perform installation debugging or disaster recovery, specify an SSH key that your `ssh-agent` process uses.
    
    :::

{% if not openshift_origin %}

`publish`
:   Specifies how to publish the user-facing endpoints of your cluster. Set `publish` to `Internal` to deploy a private cluster, which cannot be accessed from the internet. The default value is `External`. To use a shared VPC in a cluster that uses infrastructure that you provision, you must set `publish` to `Internal`. The installation program can no longer access the public DNS zone for the base domain in the host project.
{% endif %}
{% if openshift_origin %}

`publish`
:   Specifies how to publish the user-facing endpoints of your cluster. Set `publish` to `Internal` to deploy a private cluster, which cannot be accessed from the internet. The default value is `External`. To use a shared VPC in a cluster that uses infrastructure that you provision, you must set `publish` to `Internal`. The installation program can no longer access the public DNS zone for the base domain in the host project.
{% endif %}