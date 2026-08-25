{%- set _mod_docs_content_type = "PROCEDURE" %}
# Connect to the serial console by using the web console {id="virt-connecting-serial-console-web_{{ context }}"}

You can connect to the serial console of a virtual machine (VM) by using the {{ product_title }} web console. If you connect to a Windows VM with a vGPU assigned as a mediated device, you can switch between the default display and the vGPU display. {._abstract}


:::note

Running concurrent VNC connections to a single virtual machine is not currently supported.

:::


**Procedure**

1.  On the **Virtualization** -> **VirtualMachines** page, click a VM to open the **VirtualMachine details** page.
1.  In the navigation panel, right-click the virtual machine and select **Open Console**.
1.  Click the **Console** tab. The VNC console session starts automatically.

    :::important

    Only one connection to the VNC console is possible at a time. If you try to create a second connection to the same VNC console, a warning is displayed. You must disconnect the existing session before you create the new session.
    
    :::

1.  Click **Disconnect** to end the VNC console session. Otherwise, the VNC console session continues to run in the background.
1.  Select **Serial console** from the console list.
1.  Optional: To switch to the vGPU display of a Windows VM, select **Ctl + Alt + 2** from the **Send key** list.
    *   Select **Ctl + Alt + 1** from the **Send key** list to restore the default display.
1.  To end the console session, click outside the console pane and then click **Disconnect**.