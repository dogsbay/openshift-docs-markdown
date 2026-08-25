{%- set _mod_docs_content_type = "REFERENCE" %}
# Sample {{ rh_openstack }} provider specification {id="cpmso-yaml-provider-spec-openstack_{{ context }}"}

You can update your control plane machines to reflect changes in your underlying infrastructure by editing values in the control plane machine set provider specification. {._abstract}

The following example YAML illustrates a valid configuration for an {{ rh_openstack_first }} cluster.

{% include "./snippets/cpmso-new-providerspec-match-install.md" %}

You can omit any field that has a value set in the failure domain section of the CR.

{% include "./snippets/cluster-id-explanation-oc-get.md" %}

```yaml title="Sample OpenStack providerSpec values"
apiVersion: machine.openshift.io/v1
kind: ControlPlaneMachineSet
metadata:
  name: cluster
  namespace: openshift-machine-api
spec:
# ...
  template:
# ...
      spec:
        providerSpec:
          value:
            apiVersion: machine.openshift.io/v1alpha1
            cloudName: openstack
            cloudsSecret:
              name: openstack-cloud-credentials
              namespace: openshift-machine-api
            flavor: m1.xlarge
            image: <cluster_id>-rhcos
            kind: OpenstackProviderSpec
            metadata:
              creationTimestamp: null
            networks:
            - filter: {}
              subnets:
              - filter:
                  name: <cluster_id>-nodes
                  tags: openshiftClusterID=<cluster_id>
            securityGroups:
            - filter: {}
              name: <cluster_id>-master
            serverGroupName: <cluster_id>-master
            serverMetadata:
              Name: <cluster_id>-master
              openshiftClusterID: <cluster_id>
            tags:
            - openshiftClusterID=<cluster_id>
            trunk: true
            userDataSecret:
              name: master-user-data
```
where:


`spec.template.spec.providerSpec.value.cloudsSecret.name`
:   Specifies the secret name for the cluster.
    Do not change this value.


`spec.template.spec.providerSpec.value.flavor`
:   Specifies the {{ rh_openstack }} flavor type for the control plane.


`spec.template.spec.providerSpec.value.kind`
:   Specifies the cloud provider platform type.
    Do not change this value.


`spec.template.spec.providerSpec.value.securityGroups`
:   Specifies the control plane machines security group.