const COMPONENTS_DIR = "../images/components/";
const CHANNELS_DIR = COMPONENTS_DIR + "Channels/";
const CHANNEL = CHANNELS_DIR + "Channel.png";
const CHANNEL_ADAPTER = CHANNELS_DIR + "ChannelAdapter.png";
const DATA_TYPE_CHANNEL = CHANNELS_DIR + "DataTypeChannel.png";
const DEAD_LETTER_CHANNEL = CHANNELS_DIR + "DeadLetterChannel.png";
const GUARANTEED_DELIVERY = CHANNELS_DIR + "GuaranteedDelivery.png";
const INVALID_MESSAGE_CHANNEL = CHANNELS_DIR + "InvalidMessageChannel.png";
const MESSAGE_BUS = CHANNELS_DIR + "MessageBus.png";
const MESSAGING_BRIDGE = CHANNELS_DIR + "MessagingBridge.png";
const PUB_SUB = CHANNELS_DIR + "PublishSubscribeChannel.png";

const ENDPOINT_DIR = COMPONENTS_DIR + "Endpoint/";
const COMPETING_CONSUMERS = ENDPOINT_DIR  + "CompetingConsumers.png";
const DURABLE_SUBSCRIBER = ENDPOINT_DIR  + "DurableSubscriber.png";
const EVENT_DRIVEN_CONSUMER = ENDPOINT_DIR  + "EventDrivenConsumer.png";
const MESSAGE_DISPATCHER = ENDPOINT_DIR  + "MessageDispatcher.png";
const MESSAGE_ENDPOINT = ENDPOINT_DIR  + "MessageEndpoint.png";
const MESSAGING_GATEWAY = ENDPOINT_DIR  + "MessagingGateway.png";
const POLLING_CONSUMER = ENDPOINT_DIR  + "PollingConsumer.png";
const SELECTIVE_CONSUMER = ENDPOINT_DIR  + "SelectiveConsumer.png";
const SERVICE_ACTIVATOR = ENDPOINT_DIR  + "ServiceActivator.png";
const TRANSACTIONAL_CLIENT = ENDPOINT_DIR  + "TransactionalClient.png";

const MANAGEMENT_DIR = COMPONENTS_DIR + "Management/";
const CHANNEL_PURGER = MANAGEMENT_DIR + "ChannelPurger.png";
const CONTROL_BUS = MANAGEMENT_DIR + "ControlBus.png";
const DETOUR = MANAGEMENT_DIR + "Detour.png";
const MESSAGE_STORE = MANAGEMENT_DIR + "MessageStore.png";
const TEST_MESSAGE = MANAGEMENT_DIR + "TestMessage.png";
const WIRE_TAP = MANAGEMENT_DIR + "WireTap.png";


const PATTERN_DIR = COMPONENTS_DIR + "Patterns/";
const MESSAGE = PATTERN_DIR + "Message.png";
const COMMAND_MESSAGE = PATTERN_DIR + "CommandMessage.png";
const CORRELATION_ID = PATTERN_DIR + "CorrelationID.png";
const DOCUMENT_MESSAGE = PATTERN_DIR + "DocumentMessage.png";
const EVENT_MESSAGE = PATTERN_DIR + "EventMessage.png";
const MESSAGE_BRANCH = PATTERN_DIR + "MessageBranch.png";
const MESSAGE_SEQUENCE = PATTERN_DIR + "MessageSequence.png";
const REQUEST_REPLY = PATTERN_DIR + "RequestReply.png";
const RETURN_ADDRESS = PATTERN_DIR + "ReturnAddress.png";


const ROUTING_DIR = COMPONENTS_DIR + "Routing/";
const AGGREGATOR = ROUTING_DIR + "Aggregator.png";
const COMPOSED = ROUTING_DIR + "ComposedMessageProcessor.png";
const CONTENT_BASED = ROUTING_DIR + "ContentBasedRouter.png";
const FILTER = ROUTING_DIR + "MessageFilter.png";
const ROUTER = ROUTING_DIR + "MessageRouter.png";
const PROCESS_MANAGER = ROUTING_DIR + "ProcessManager.png";
const RECIPIENT_LIST = ROUTING_DIR + "RecipientList.png";
const RESEQUENCER = ROUTING_DIR + "Resquencer.png";
const ROUTING_SLIP = ROUTING_DIR + "RoutingSlip.png";
const SPLITTER = ROUTING_DIR + "Splitter.png";

const TRANSFORMATION_DIR = COMPONENTS_DIR + "Transformation/";
const CLAIM_CHECK = TRANSFORMATION_DIR + "ClaimCheck.png";
const CONTENT_ENRICHER =  TRANSFORMATION_DIR + "ContentEnricher.png";
const CONTENT_FILTER = TRANSFORMATION_DIR + "ContentFilter.png";
const ENVELOPE_WRAPPER = TRANSFORMATION_DIR + "EnvelopeWrapper.png";
const MESSAGE_TRANSLATOR = TRANSFORMATION_DIR + "MessageTranslator.png";
const NORMALIZER = TRANSFORMATION_DIR + "Normalizer.png";

var EditorPanel = function() {

    var store = Ext.create('Ext.data.TreeStore', {
        root: {
            expanded: true,
            children: [
                { text: "Channel", expanded: true, icon: CHANNEL, children:[
                    {text: "Channel Adapter", leaf: true, icon: CHANNEL_ADAPTER},
                    {text: "Data Type Channel", leaf: true, icon: DATA_TYPE_CHANNEL},
                    {text: "Dead Letter Channel", leaf: true, icon: DEAD_LETTER_CHANNEL},
                    {text: "Guaranteed Delivery", leaf: true, icon: GUARANTEED_DELIVERY},
                    {text: "Invalid Message Channel", leaf: true, icon: INVALID_MESSAGE_CHANNEL},
                    {text: "Message Bus", leaf: true, icon: MESSAGE_BUS},
                    {text: "Messaging Bridge", leaf: true, icon: MESSAGING_BRIDGE},
                    {text: "Publish Subscribe Channel", leaf: true, icon: PUB_SUB }
                ]  },
                { text: "EndPoint", expanded: true, icon: MESSAGE_ENDPOINT, children:[
                    {text: "Competing Consumers", leaf: true, icon: COMPETING_CONSUMERS},
                    {text: "Durable Subscriber", leaf: true, icon: DURABLE_SUBSCRIBER},
                    {text: "Event Driven Consumer", leaf: true, icon: EVENT_DRIVEN_CONSUMER},
                    {text: "Message Dispatcher", leaf: true, icon: MESSAGE_DISPATCHER},
                    {text: "Messaging Gateway", leaf: true, icon: MESSAGING_GATEWAY},
                    {text: "Polling Consumer", leaf: true, icon: POLLING_CONSUMER},
                    {text: "Selective Consumer", leaf: true, icon: SELECTIVE_CONSUMER  },
                    {text: "Service Activator", leaf: true, icon: SERVICE_ACTIVATOR },
                    {text: "Transactional Client", leaf: true, icon: TRANSACTIONAL_CLIENT }
                ]  },
                { text: "Management", expanded: true, icon: CONTROL_BUS, children:[
                    {text: "Channel Purger", leaf: true, icon: CHANNEL_PURGER},
                    {text: "Detour", leaf: true, icon: DETOUR},
                    {text: "Message Store", leaf: true, icon: MESSAGE_STORE},
                    {text: "Test Message", leaf: true, icon: TEST_MESSAGE},
                    {text: "Wire Tap", leaf: true, icon: WIRE_TAP}
                ]  },
                { text: "Message", expanded: true, icon: MESSAGE,  children:[
                    {text: "Command Message", leaf: true, icon: COMMAND_MESSAGE},
                    {text: "Correlation ID", leaf: true, icon: CORRELATION_ID},
                    {text: "Document Message", leaf: true, icon: DOCUMENT_MESSAGE},
                    {text: "Event Message", leaf: true, icon: EVENT_MESSAGE},
                    {text: "Message Branch", leaf: true, icon: MESSAGE_BRANCH},
                    {text: "Message Sequence", leaf: true, icon: MESSAGE_SEQUENCE},
                    {text: "Request Reply", leaf: true, icon: REQUEST_REPLY},
                    {text: "Return Address", leaf: true, icon: RETURN_ADDRESS}
                ]  },
                { text: "Routing", expanded: true, icon: ROUTER, children:[
                    {text: "Message Aggregator", leaf: true, icon: AGGREGATOR},
                    {text: "Composed Message Processor", leaf: true, icon: COMPOSED},
                    {text: "Content Based Router", leaf: true, icon: CONTENT_BASED},
                    {text: "Message Based Filter", leaf: true, icon: FILTER},
                    {text: "Processor Manager", leaf: true, icon: PROCESS_MANAGER},
                    {text: "Recipient List", leaf: true, icon: RECIPIENT_LIST},
                    {text: "Resquencer", leaf: true, icon: RESEQUENCER},
                    {text: "Routing Slip", leaf: true, icon: ROUTING_SLIP},
                    {text: "Splitter", leaf: true, icon: SPLITTER}
                ]  },
                { text: "Transformation", expanded: true, icon: MESSAGE_TRANSLATOR, children:[
                    {text: "Claim Check", leaf: true, icon: CLAIM_CHECK},
                    {text: "Content Enricher", leaf: true, icon: CONTENT_ENRICHER},
                    {text: "Content Filter", leaf: true, icon: CONTENT_FILTER},
                    {text: "Enveloper Wrapper", leaf: true, icon: ENVELOPE_WRAPPER},
                    {text: "Normalizer", leaf: true, icon: NORMALIZER}
                ]  }
            ]
        }
    });


    return (
        {
            stateful: is_editor && (! is_embed),
            collapseFirst: false,
            tools:[
            ],
            stateId: "editor_panel",
            region: 'west',
            width: editorConfig.sideBarWidth,
            split: true,
            store: store,
            autoScroll: true,
            listeners: {beforeexpand:function(p){}, beforecollapse:function(){
            }},
            collapsible: ! mxClient.IS_TOUCH,
            header: ! is_embed,
            title: getText("Messaging Objects"),
            border: false,
            rootVisible: false
        });


};




