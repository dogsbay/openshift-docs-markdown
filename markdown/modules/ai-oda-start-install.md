{%- set _mod_docs_content_type = "PROCEDURE" %}
# Completing host discovery and starting cluster installation {id="abi-oda-start-install_{{ context }}"}

After preparing control plane and worker nodes in the {{ oda_first }} environment, complete host discovery and initiate the cluster installation. {._abstract}

As you create hosts using the provided scripts, the hosts begin to appear in the table of the ***Host Discovery*** page, where you can configure the hosts as needed.

**Procedure**

1.  Go to the ***Host Discovery*** page.
1.  Assign host roles in the ***Host Inventory*** table:
    1.  In the ***Role*** column of the table, expand the ***Auto-Assign*** arrow for the host.
    1.  Assign the host with either a ***Control Plane node*** or a ***Worker*** role.
    1.  Repeat this process for each host in the table.
1.  Click ***Next***.
1.  On the **Storage** page, verify storage details and configure host storage as needed.
1.  Click ***Next***.
1.  Configure networking details on the ***Networking*** page:
    1.  Select ***User-Managed Networking*** as the ***Network Management*** type.
    1.  Select ***Host SSH Public Key for troubleshooting after installation*** to connect to hosts using a public SSH key for troubleshooting after installation.
1.  Click ***Next***.
1.  Validate cluster details on the ***Review and create*** page.
1.  Click ***Install cluster*** to begin the installation.
1.  Monitor installation progress and wait for all nodes to reach a `Ready` state.