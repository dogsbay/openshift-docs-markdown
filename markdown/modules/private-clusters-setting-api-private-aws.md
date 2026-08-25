{% if context == "configuring-private-cluster" %}
{%- set post_install = true -%}
{% endif %}
{% if context == "cpmso-supported-features-aws" %}
{%- set cpmso_using_aws = true -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" %}
# Restricting the API server to private for an {{ aws_full }} cluster {id="private-clusters-setting-api-private-aws_{{ context }}"}

If the security posture of your organization does not allow clusters to use an open API endpoint, you can restrict the API server to use only internal load balancers.
To implement this API server restriction, use the {{ aws_first }} console and {{ oc_first }} to delete the external load balancer components. {._abstract}

{% if post_install %}

:::important

The {{ oc_first }} steps that remove the external load balancers require the Machine API.
For clusters that cannot use the Machine API, you must manually remove the external load balancers.

Clusters with the infrastructure platform type `none` cannot use the Machine API.
To view the platform type for your cluster, run the following command:

```terminal
$ oc get infrastructure cluster -o jsonpath='{.status.platform}'
```

:::

{% endif %}

**Prerequisites**

*   You have installed an {{ product_title }} cluster on {{ aws_short }}.
*   You have access to the {{ aws_short }} console as a user with administrator privileges.
*   You have access to the {{ oc_first }} as a user with administrator privileges.

**Procedure**

1.  Log in to the {{ aws_short }} console as a user with administrator privileges.
1.  Delete the external load balancer.

    :::note

    The API DNS entry in the private zone already points to the internal load balancer, which uses an identical configuration, so you do not need to modify the internal load balancer.
    
    :::

1.  Delete the `api.<cluster_name>.<domain_name>` DNS entry in the public zone.

    where `<cluster_name>` is the name of the cluster and `<domain_name>` is the base domain for the cluster.
1.  To remove the external load balancers, log in to the {{ oc_first }} as a user with administrator privileges.

{% if post_install %}
    *   If your cluster uses a control plane machine set, remove the external load balancers by editing the `ControlPlaneMachineSet` custom resource (CR).
        {%- endif %}
        1.  Edit the `ControlPlaneMachineSet` CR by running the following command:
            ```terminal
            $ oc edit controlplanemachineset.machine.openshift.io cluster \
              -n openshift-machine-api
            ```
        1.  Remove the external load balancers by deleting the corresponding lines in the control plane machine set custom resource (CR).

            In the `spec.template.spec.providerSpec.value.loadBalancers` section of the CR, the `name` value for the external load balancer ends in `-ext`.
            Delete the line with the external load balancer `name` value and the line with the external load balancer `type` value that accompanies it.
            ```yaml
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
                        loadBalancers:
                        - name: <cluster_id>-ext
                          type: network
                        - name: <cluster_id>-int
                          type: network
            # ...
            ```
        1.  Save your changes and exit the object specification.

            When you save an update to the control plane machine set, the Control Plane Machine Set Operator updates the control plane machines according to your configured update strategy.
            For more information, see "Updating the control plane configuration".
{%- if post_install %}
    *   If your cluster does not use a control plane machine set, you must delete the external load balancers from each control plane machine.
        1.  List the cluster machines by running the following command:
            ```terminal
            $ oc get machine -n openshift-machine-api
            ```
            ```text title="Example output"
            NAME                                        STATE     TYPE        REGION      ZONE         AGE
            <cluster_id>-master-0                       running   m4.xlarge   us-east-1   us-east-1a   17m
            <cluster_id>-master-1                       running   m4.xlarge   us-east-1   us-east-1b   17m
            <cluster_id>-master-2                       running   m4.xlarge   us-east-1   us-east-1a   17m
            <cluster_id>-worker-us-east-1a-<zone_tag>   running   m4.xlarge   us-east-1   us-east-1a   15m
            <cluster_id>-worker-us-east-1a-<zone_tag>   running   m4.xlarge   us-east-1   us-east-1a   15m
            <cluster_id>-worker-us-east-1b-<zone_tag>   running   m4.xlarge   us-east-1   us-east-1b   15m
            ```

            The control plane machines contain the `master` string in their names.
        1.  Remove the external load balancer from each control plane machine:
            1.  Edit a control plane machine object to by running the following command:
                ```terminal
                $ oc edit machines -n openshift-machine-api <control_plane_machine_name>
                ```

                where `<control_plane_machine_name>` is the name of the control plane machine object to modify.
            1.  Remove the lines that describe the external load balancer.

                In the `spec.providerSpec.value.loadBalancers` section of the CR, the `name` value for the external load balancer ends in `-ext`.
                Delete the line with the external load balancer `name` value and the the line with the external load balancer `type` value that accompanies it.
                ```yaml
                apiVersion: machine.openshift.io/v1beta1
                kind: Machine
                metadata:
                  name: <control_plane_machine_name>
                  namespace: openshift-machine-api
                spec:
                  providerSpec:
                    value:
                      loadBalancers:
                      - name: <cluster_id>-ext
                        type: network
                      - name: <cluster_id>-int
                        type: network
                # ...
                ```
            1.  Save your changes and exit the object specification.
            1.  Repeat this process for each control plane machine.
{% endif %}

{% if context == "configuring-private-cluster" %}
{%- set post_install = false -%}
{% endif %}
{% if context == "cpmso-using-aws" %}
{%- set cpmso_using_aws = false -%}
{% endif %}