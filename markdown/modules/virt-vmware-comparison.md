{%- set _mod_docs_content_type = "REFERENCE" %}
# Comparing {{ VirtProductName }} to {{ vmw_full }} {id="virt-vmware-comparison_{{ context }}"}

If you are familiar with {{ vmw_first }}, the following table lists {{ VirtProductName }} components that you can use to accomplish similar tasks. {._abstract}

However, because {{ VirtProductName }} is conceptually different from {{ vmw_short }}, and much of its functionality comes from the underlying {{ product_title }}, {{ VirtProductName }} does not have direct alternatives for all {{ vmw_short }} concepts or components.

**Mapping of {{ vmw_short }} concepts to their closest {{ VirtProductName }} counterparts**

<table>
<tbody>
<tr>
  <td>{{ vmw_short }} concept</td>
  <td>{{ VirtProductName }}</td>
  <td>Explanation</td>
</tr>
<tr>
  <td>Datastore</td>
  <td>Persistent volume (PV)<br><br>Persistent volume claim (PVC)</td>
  {% if openshift_dedicated %}<td>Stores VM disks. A PV represents existing storage and is attached to a VM through a PVC. When configured for shared access, PVCs can be mounted by multiple VMs simultaneously.</td>{% endif %}
  {% if not openshift_dedicated %}<td>Stores VM disks. A PV represents existing storage and is attached to a VM through a PVC. When created with the <code>ReadWriteMany</code> (RWX) access mode, PVCs can be mounted by multiple VMs simultaneously.</td>{% endif %}
</tr>
<tr>
  <td>Dynamic Resource Scheduling (DRS)</td>
  <td>Pod eviction policy<br><br>Descheduler</td>
  <td>Provides active resource balancing. A combination of pod eviction policies and a descheduler allows VMs to be live migrated to more appropriate nodes to keep node resource utilization manageable.</td>
</tr>
<tr>
  <td>NSX</td>
  <td>{% if not openshift_dedicated %} Multus {% endif %} OVN-Kubernetes<br><br> {% if not openshift_dedicated %} Third-party container network interface (CNI) plug-ins {% endif %}</td>
  <td>Provides an overlay network configuration. There is no direct equivalent for NSX in {{ VirtProductName }}, but you can use the OVN-Kubernetes network provider {% if openshift_dedicated %}.{% endif %} {% if not openshift_dedicated %}or install certified third-party CNI plug-ins.{% endif %}</td>
</tr>
<tr>
  <td>Storage Policy Based Management (SPBM)</td>
  <td>Storage class</td>
  <td>Provides policy-based storage selection. Storage classes represent various storage types and describe storage capabilities, such as quality of service, backup policy, reclaim policy, and whether volume expansion is allowed. A PVC can request a specific storage class to satisfy application requirements.</td>
</tr>
<tr>
  <td>vCenter<br><br>vRealize Operations</td>
  <td>OpenShift Metrics and Monitoring</td>
  <td>Provides host and VM metrics. You can view metrics and monitor the overall health of the cluster and VMs by using the {{ product_title }} web console.</td>
</tr>
<tr>
  <td>vMotion</td>
  <td>Live migration</td>
  {% if openshift_dedicated %}<td>Moves a running VM to another node without interruption. For live migration to be available, the PVC attached to the VM must use storage that supports live migration.</td>{% endif %}
  {% if not openshift_dedicated %}<td>Moves a running VM to another node without interruption. For live migration to be available, the PVC attached to the VM must have the <code>ReadWriteMany</code> (RWX) access mode.</td>{% endif %}
</tr>
<tr>
  {% if not openshift_dedicated %}<td>vSwitch<br><br>DvSwitch</td>{% endif %}
  {% if not openshift_dedicated %}<td>NMState Operator<br><br>Multus</td>{% endif %}
  {% if not openshift_dedicated %}<td>Provides a physical network configuration. You can use the NMState Operator to apply state-driven network configuration and manage various network interface types, including Linux bridges and network bonds. With Multus, you can attach multiple network interfaces and connect VMs to external networks.</td>{% endif %}
</tr>
</tbody>
</table>