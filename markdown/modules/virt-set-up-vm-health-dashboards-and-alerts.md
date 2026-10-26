{%- set _mod_docs_content_type = "CONCEPT" %}
# Set up VM health dashboards and alerts {id="virt-set-up-vm-health-dashboards-and-alerts_{{ context }}"}

Set up dashboards, probes, watchdogs, and custom metrics so that you can see the state of your virtual machines, including a VM that is running but no longer serving its workload. {._abstract}

{{ VirtProductName }} monitors a VM in two ways, and you set up each one separately.

Prometheus collects the metrics that {{ VirtProductName }} reports from outside the guest, such as network and storage use, guest memory swapping, and live migration progress. Swapping queries return data only for guests that have swap enabled in the guest operating system. You can query these metrics yourself or view them on the dashboards that {{ VirtProductName }} installs. For anything {{ VirtProductName }} does not collect by default, the `node-exporter` service sends metrics from inside a VM to the cluster monitoring stack. Downward metrics expose host and VM information to the guest.

Probes test whether the workload is responding. Add a readiness, liveness, or guest agent ping probe to the `VirtualMachine` resource. Add a watchdog device to recover a guest whose operating system has stopped responding.

**Additional resources**
{._additional-resources}

*   [Monitoring application health by using health checks](/applications/application-health#application-health)
{%- if not (openshift_rosa or openshift_dedicated or openshift_rosa_hcp) %}
*   [Add kernel arguments to nodes](/machine_configuration/machine-configs-configure#nodes-nodes-kernel-arguments_machine-configs-configure)
{%- endif %}
{%- if not (openshift_rosa_hcp or openshift_rosa or openshift_dedicated) %}
*   [About {{ product_title }} monitoring](https://docs.redhat.com/en/documentation/monitoring_stack_for_red_hat_openshift/latest/html/about_monitoring/about-ocp-monitoring)
{%- endif %}
{%- if openshift_dedicated or openshift_rosa %}
*   [About {{ product_title }} monitoring](/observability/monitoring/about-ocp-monitoring/about-ocp-monitoring#about-ocp-monitoring)
{%- endif %}
*   [Enabling monitoring for user-defined projects](https://docs.redhat.com/en/documentation/monitoring_stack_for_red_hat_openshift/latest/html/configuring_user_workload_monitoring/preparing-to-configure-the-monitoring-stack-uwm#enabling-monitoring-for-user-defined-projects-uwm_preparing-to-configure-the-monitoring-stack-uwm)
*   [KubeVirt components metrics](https://github.com/kubevirt/monitoring/blob/main/docs/metrics.md)
*   [Querying Prometheus](https://prometheus.io/docs/prometheus/latest/querying/basics/)
*   [Prometheus query examples](https://prometheus.io/docs/prometheus/latest/querying/examples/)