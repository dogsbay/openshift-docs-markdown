{%- set _mod_docs_content_type = "PROCEDURE" %}
# Changing the {{ rh_openstack }} compute flavor by using a control plane machine set {id="cpms-changing-openstack-flavor-type_{{ context }}"}

You can change the {{ rh_openstack_first }} compute service (Nova) flavor that your control plane machines use by updating the specification in the control plane machine set custom resource. {._abstract}

In {{ rh_openstack }}, flavors define the compute, memory, and storage capacity of computing instances. By increasing or decreasing the flavor size, you can scale your control plane vertically.

**Prerequisites**

*   Your {{ rh_openstack }} cluster uses a control plane machine set.

**Procedure**

1.  Edit the following line under the `providerSpec` field:
    ```yaml
    providerSpec:
      value:
    # ...
        flavor: m1.xlarge
    ```

    where:

    providerSpec.value.flavor
    :   Specify a {{ rh_openstack }} flavor type that has the same base as the existing selection. For example, you can change `m6i.xlarge` to `m6i.2xlarge` or `m6i.4xlarge`. You can choose larger or smaller flavors depending on your vertical scaling needs.

1.  Save your changes.

    After you save your changes, machines are replaced with ones that use the flavor you chose.