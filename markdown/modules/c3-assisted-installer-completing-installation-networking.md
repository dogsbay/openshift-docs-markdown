{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring networking {id="c3-ai-completing-installation-networking_{{ context }}"}

On the **Networking** page, add the NTP sources for any hosts that display the `Some validations failed` status. {._abstract}

**Procedure**

1.  In the **Host inventory** table, click the **Some validations failed** link for each host displaying this status.
1.  Click **Add NTP sources**, and then add the IP address `169.254.169.254` for one of the nodes.
1.  Wait for 2 - 3 minutes until all the **Some validations failed** indicators disappear.
1.  Select **Next**.