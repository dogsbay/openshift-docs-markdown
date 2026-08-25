{%- set _mod_docs_content_type = "REFERENCE" %}
# Live migration requirements {id="virt-live-migration-requirements_{{ context }}"}

Live migration requires shared storage, sufficient resources, and compatible CPUs across nodes. {._abstract}


Live migration requirements

{% if openshift_dedicated %}
:   *   Shared storage that supports live migration.
{% endif %}
{% if not openshift_dedicated %}
    *   Shared storage with `ReadWriteMany` (RWX) access mode.
        {%- endif %}
    *   Sufficient RAM and network bandwidth.

    :::note


    You must ensure that there is enough memory request capacity in the cluster to support node drains that result in live migrations. You can determine the approximate required spare memory by using the following calculation:

    ```
    Product of (Maximum number of nodes that can drain in parallel) and (Highest total VM memory request allocations across nodes)
    ```


    The default number of migrations that can run in parallel in the cluster is 5. For more information, see "Configuring live migration" in the Additional resources section.
    
    :::

*   If the virtual machine uses a host model CPU, the nodes must support the virtual machine’s host model CPU.

{% if not openshift_dedicated %}

:::note

A dedicated Multus network for live migration is highly recommended. For more information, see
"Using a dedicated network for live migration" in the Additional resources section. A dedicated network minimizes the effects of network saturation on tenant workloads during migration.

:::

{% endif %}