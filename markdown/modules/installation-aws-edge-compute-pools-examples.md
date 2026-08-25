{% if context == "installing-aws-localzone" %}
{%- set local_zone = true -%}
{% endif %}
{% if context == "installing-aws-wavelength-zone" %}
{%- set wavelength_zone = true -%}
{% endif %}

{%- set _mod_docs_content_type = "CONCEPT" %}
# Examples of installation configuration files with edge compute pools {id="installation-aws-edge-compute-pools-examples_{{ context }}"}

See an example `install-config.yaml` file to better understand configurations for edge compute pools. {._abstract}

The following examples show `install-config.yaml` files that contain an edge machine pool configuration.

```yaml title="Configuration that uses an edge pool with a custom instance type"
apiVersion: v1
baseDomain: devcluster.openshift.com
metadata:
  name: ipi-edgezone
compute:
- name: edge
  platform:
    aws:
      type: r5.2xlarge
platform:
  aws:
    region: us-west-2
pullSecret: '{"auths": ...}'
sshKey: ssh-ed25519 AAAA...
```

Instance types differ between locations. To verify availability in the {{ zone_type }} in which the cluster runs, see the AWS documentation.

{% if local_zone %}
```yaml title="Configuration that uses an edge pool with a custom Amazon Elastic Block Store (EBS) type"
apiVersion: v1
baseDomain: devcluster.openshift.com
metadata:
  name: ipi-edgezone
compute:
- name: edge
  platform:
    aws:
      zones:
      - us-west-2-lax-1a
      - us-west-2-lax-1b
      - us-west-2-phx-2a
      rootVolume:
        type: gp3
        size: 120
platform:
  aws:
    region: us-west-2
pullSecret: '{"auths": ...}'
sshKey: ssh-ed25519 AAAA...
```

Elastic Block Storage (EBS) types differ between locations. Check the AWS documentation to verify availability in the {{ zone_type }} in which the cluster runs.
{% endif %}

```yaml title="Configuration that uses an edge pool with custom security groups"
apiVersion: v1
baseDomain: devcluster.openshift.com
metadata:
  name: ipi-edgezone
compute:
- name: edge
  platform:
    aws:
      additionalSecurityGroupIDs:
        - sg-1
        - sg-2
platform:
  aws:
    region: us-west-2
pullSecret: '{"auths": ...}'
sshKey: ssh-ed25519 AAAA...
```
For the `additionalSecurityGroupIDs` parameter, specify the name of the security group as it is displayed on the Amazon EC2 console. Ensure that you include the `sg` prefix.

{% if context == "installing-aws-localzone" %}
{%- set local_zone = "" -%}
{% endif %}
{% if context == "installing-aws-wavelength-zone" %}
{%- set wavelength_zone = "" -%}
{% endif %}