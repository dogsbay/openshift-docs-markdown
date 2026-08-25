{%- set _mod_docs_content_type = "CONCEPT" %}
# Known firewall issue {id="microshift-firewall-known-issue_{{ context }}"}

To avoid traffic failures after a firewalld reload or restart on {{ microshift_short }}, run firewall commands before you start {{ op_system_base_full }}. If you must run firewall commands later, restart the `ovnkube-master` pod in `openshift-ovn-kubernetes` to restore iptable rules that OVN-Kubernetes manages. {._abstract}

The CNI driver in {{ microshift_short }} makes use of iptable rules for some traffic flows, such as those using the NodePort service. The iptable rules are generated and inserted by the CNI driver, but are deleted when the firewall reloads or restarts. The absence of the iptable rules breaks traffic flows.