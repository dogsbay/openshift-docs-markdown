{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a policy {id="virt-create-node-network-config-console_{{ context }}"}

You can create a policy by using either a form or YAML in the web console. When creating a policy using a form, you can see how the new policy changes the topology of the nodes in your cluster in real time. {._abstract}

**Procedure**

1.  Navigate to **Networking** → **Node Network Configuration**.
1.  On the **Node Network Configuration** page, click **Create** and select the **From Form** option.

    :::note

    To create a policy using YAML, click **Create** -> **With YAML** option. However, the following steps apply only to the form method.
    
    :::

1.  Optional: Check the **Apply this NodeNetworkConfigurationPolicy only to specific subsets of nodes using the node selector** checkbox to specify the nodes where the policy must be applied.
1.  Enter the policy name in the **Policy name** field.
1.  Optional: Enter the description of the policy in the **Description** field.
1.  Click **Next** to move to the **Policy Interfaces** section.
1.  In the **Bridging** part of the **Policy Interfaces** section, a bridge interface named `br0` is added by default with preset values in editable fields. If required, edit the values by performing the following steps:
    1.  Enter the name of the interface in **Interface name** field.
    1.  Select the required network state. The default selected state is **Up**.
    1.  Select the type of interface. The available types are **Bridge**, **Bonding**, and **Ethernet**. The default selected value is **Bridge**.

        :::note

        Addition of a VLAN interface by using the form is not supported. To add a VLAN interface, you must use YAML to create the policy. Once added, you cannot edit the policy by using form.
        
        :::

    1.  Optional: In the IP configuration section, check **IPv4** checkbox to assign an IPv4 address to the interface, and configure the IP address assignment details:
        1.  Click **IP address** to configure the interface with a static IP address, or **DHCP** to auto-assign an IP address.
        1.  If you have selected **IP address** option, enter the IPv4 address in **IPV4 address** field, and enter the prefix length in **Prefix length** field.

            If you have selected **DHCP** option, uncheck the options that you want to disable. The available options are **Auto-DNS**, **Auto-routes**, and **Auto-gateway**. All the options are selected by default.
    1.  Optional: Enter the port number in **Port** field.
    1.  Optional: Check the checkbox **Enable STP** to enable STP.
    1.  Optional: To add an interface to the policy, click **Add another interface to the policy**.
    1.  Optional: To remove an interface from the policy, click ![minus](/_assets/images/fa-minus-circle.svg) icon next to the interface.


        :::note

        Alternatively, you can click **Edit YAML** on the top of the page to continue editing the form using YAML.
        
        :::

1.  Click **Next** to go to the **Review** section of the form.
1.  Verify the settings and click **Create** to create the policy.