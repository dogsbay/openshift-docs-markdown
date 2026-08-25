{%- set _mod_docs_content_type = "CONCEPT" %}
# Determining where installation issues occur {id="determining-where-installation-issues-occur_{{ context }}"}

When troubleshooting {{ product_title }} installation issues, you can monitor installation logs to determine at which stage issues occur. Then, retrieve diagnostic data relevant to that stage. {._abstract}

{{ product_title }} installation proceeds through the following stages:

1.  Ignition configuration files are created.
1.  The bootstrap machine boots and starts hosting the remote resources required for the control plane machines to boot.
1.  The control plane machines fetch the remote resources from the bootstrap machine and finish booting.
1.  The control plane machines use the bootstrap machine to form an etcd cluster.
1.  The bootstrap machine starts a temporary Kubernetes control plane using the new etcd cluster.
1.  The temporary control plane schedules the production control plane to the control plane machines.
1.  The temporary control plane shuts down and passes control to the production control plane.
1.  The bootstrap machine adds {{ product_title }} components into the production control plane.
1.  The installation program shuts down the bootstrap machine.
1.  The control plane sets up the worker nodes.
1.  The control plane installs additional services in the form of a set of Operators.
1.  The cluster downloads and configures remaining components needed for the day-to-day operation, including the creation of worker machines in supported environments.