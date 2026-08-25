{%- set _mod_docs_content_type = "REFERENCE" %}
# The OpenStack Cloud Controller Manager (CCM) config map {id="cluster-cloud-controller-config_{{ context }}"}

An {{ rh_openstack }} CCM config map defines how your cluster interacts with your {{ rh_openstack }} cloud. By default, the configuration is stored under the `cloud.conf` key in the `cloud-conf` config map in the `openshift-cloud-controller-manager` namespace. {._abstract}


:::important

The `cloud-conf` config map is generated from the `cloud-provider-config` config map in the `openshift-config` namespace.

To change the settings that are described by the `cloud-conf` config map, modify the `cloud-provider-config` config map.

As part of this synchronization, the CCM Operator overrides some options. For more information, see "The {{ rh_openstack }} Cloud Controller Manager".

:::


For example:

```yaml title="An example cloud-conf config map"
apiVersion: v1
data:
  cloud.conf: |
    [Global]
    secret-name = openstack-credentials
    secret-namespace = kube-system
    region = regionOne
    [LoadBalancer]
    enabled = True
kind: ConfigMap
metadata:
  creationTimestamp: "2022-12-20T17:01:08Z"
  name: cloud-conf
  namespace: openshift-cloud-controller-manager
  resourceVersion: "2519"
  uid: cbbeedaf-41ed-41c2-9f37-4885732d3677
```
`apiVersion.data.cloud.conf`: Specifies global options by using a `clouds.yaml` file rather than modifying the config map.

The following options are present in the config map. Except when indicated otherwise, they are mandatory for clusters that run on {{ rh_openstack }}.