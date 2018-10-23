<script type = "text/javascript"> 
  jQuery(document).ready(function($) 
  {
	var ws4redis = WS4Redis({
		uri : '{{ WS4REDIS_URI }}?subscribe-broadcast&publish-broadcast&echo',
		receive_message : receiveMessage,
		heartbeat_msg : "{{ WS4REDIS_HEARTBEAT }}"
	});
	var billboard = $('#billboard');

	// receive a message though the Websocket from the server
	function receiveMessage(msg) {
		billboard.append('<br/>' + msg);
		if(msg!='{THE END}')
		{
		   var scrollbar_setting=$("#bl_sbar_default_setting");
		   if(scrollbar_setting.is(':checked'))
		   {
		   	 $("#billboard").scrollTop($("#billboard")[0].scrollHeight);
		   }	
		}
		
	}
});
</script>